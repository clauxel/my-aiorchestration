const LIVE_ORIGIN = 'https://aiorchestration.space'
const LIVE_HOST = 'aiorchestration.space'
const ALT_HOSTS = new Set(['www.aiorchestration.space'])
const ANNUAL_DISCOUNT_MULTIPLIER = 0.5

const planCatalog = {
  starter: {
    id: 'starter',
    name: 'Starter',
    monthlyAmountCents: 2900,
    currency: 'USD',
    products: {
      monthly: 'prod_77DygdbLUihOxceqHP4mmZ',
      annual: 'prod_4ostXeuQBrhrPYkILi0poA',
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    monthlyAmountCents: 9900,
    currency: 'USD',
    products: {
      monthly: 'prod_7dsaUx8WAMcyLfDdjqDVOM',
      annual: 'prod_7m7rQfw5bCSbMVb61BCoKK',
    },
  },
  team: {
    id: 'team',
    name: 'Team',
    monthlyAmountCents: 29900,
    currency: 'USD',
    products: {
      monthly: 'prod_6IEZdVvJF7AxzJBAO2PGfa',
      annual: 'prod_4mFuYaqInQdVnhnTlNBmr1',
    },
  },
}

const indexablePaths = [
  '/',
  '/pricing',
  '/resources/github',
  '/resources/tools',
  '/resources/open-source',
  '/resources/platform',
  '/resources/jobs',
  '/resources/langchain',
  '/resources/examples',
  '/resources/claude',
  '/privacy',
  '/terms',
]

const staticAssetPaths = new Set([...indexablePaths, '/checkout/done'])

function securityHeaders(request) {
  const headers = new Headers({
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  })

  const origin = request?.headers?.get?.('Origin')
  if (isAllowedCorsOrigin(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
    headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    headers.set('Access-Control-Allow-Headers', 'Content-Type')
    headers.set('Vary', 'Origin')
  }

  return headers
}

function isAllowedCorsOrigin(origin) {
  if (!origin) return false

  try {
    const url = new URL(origin)
    if (url.hostname === LIVE_HOST || ALT_HOSTS.has(url.hostname)) return true
    if (url.hostname.endsWith('.pages.dev') || url.hostname.endsWith('.workers.dev')) return true
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return true
  } catch {}

  return false
}

function jsonResponse(data, status = 200, request = null) {
  const headers = securityHeaders(request)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  return new Response(JSON.stringify(data), { status, headers })
}

function handleOptions(request) {
  return new Response(null, { status: 204, headers: securityHeaders(request) })
}

function maybeRedirectToHttps(requestUrl) {
  if (requestUrl.protocol !== 'https:') {
    const redirectUrl = new URL(requestUrl)
    redirectUrl.protocol = 'https:'
    return Response.redirect(redirectUrl.toString(), 308)
  }
  return null
}

function maybeRedirectWww(requestUrl) {
  if (ALT_HOSTS.has(requestUrl.hostname)) {
    const redirectUrl = new URL(requestUrl)
    redirectUrl.hostname = LIVE_HOST
    return Response.redirect(redirectUrl.toString(), 301)
  }
  return null
}

function resolvePublicAppOrigin(requestUrl) {
  if (requestUrl.hostname === LIVE_HOST || ALT_HOSTS.has(requestUrl.hostname)) {
    return `https://${requestUrl.hostname}`
  }

  if (requestUrl.hostname.endsWith('.pages.dev') || requestUrl.hostname.endsWith('.workers.dev')) {
    return requestUrl.origin
  }

  return LIVE_ORIGIN
}

function resolveCreemBase(env) {
  const raw = String(env?.CREEM_API_BASE ?? '').trim()
  return raw ? raw.replace(/\/+$/, '') : 'https://api.creem.io'
}

async function getSecretValue(value) {
  if (typeof value === 'string') return value.trim()
  if (value && typeof value.get === 'function') {
    const resolved = await value.get()
    return typeof resolved === 'string' ? resolved.trim() : ''
  }
  return ''
}

async function firstSecretEnv(env, ...keys) {
  for (const key of keys) {
    const value = await getSecretValue(env?.[key])
    if (value) return value
  }
  return ''
}

function normalizeEnvKey(value) {
  return String(value)
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function resolveConfiguredProductId(env, planId, billing) {
  const cycle = billing === 'monthly' ? 'MONTHLY' : 'YEARLY'
  const tier = normalizeEnvKey(planId)
  const normalizedSelection = normalizeEnvKey(`${planId}_${billing}`)
  const keys = [
    `CREEM_PRODUCT_AIORCHESTRATION_${tier}_${cycle}`,
    `CREEM_PRODUCT_ID_AIORCHESTRATION_${normalizedSelection}`,
    `CREEM_PRODUCT_ID_${normalizedSelection}`,
    `CREEM_PRODUCT_ID_${tier}`,
    'CREEM_PRODUCT_ID',
  ]

  for (const key of keys) {
    const value = env?.[key]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

async function requestCreemJson(apiKey, url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(body),
  })

  const rawText = await response.text()
  let payload = null
  if (rawText) {
    try {
      payload = JSON.parse(rawText)
    } catch {
      payload = null
    }
  }

  if (!response.ok) {
    throw new Error(
      payload && typeof payload === 'object'
        ? payload.message || payload.error || 'Creem request failed.'
        : 'Creem request failed.',
    )
  }

  return payload || {}
}

function extractCheckoutUrl(payload) {
  const candidates = [payload?.checkout_url, payload?.checkoutUrl, payload?.url]
  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim()) return candidate.trim()
  }
  return ''
}

async function handleCheckout(request, env, requestUrl) {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'Method not allowed.' }, 405, request)
  }

  const apiKey = await firstSecretEnv(env, 'API_PROD_KEY', 'CREEM_API_KEY', 'CREEM_KEY')
  if (!apiKey) {
    return jsonResponse({ ok: false, error: 'Payment is not configured yet.' }, 503, request)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid JSON body.' }, 400, request)
  }

  const planId = typeof body?.planId === 'string' ? body.planId : 'pro'
  const billing = body?.billing === 'monthly' ? 'monthly' : 'annual'
  const plan = planCatalog[planId] || planCatalog.pro
  const configuredProductId = resolveConfiguredProductId(env, plan.id, billing)
  const productId = configuredProductId || plan.products[billing]
  const successUrl = `${resolvePublicAppOrigin(requestUrl)}/checkout/done/`

  try {
    const checkout = await requestCreemJson(apiKey, `${resolveCreemBase(env)}/v1/checkouts`, {
      product_id: productId,
      units: 1,
      success_url: successUrl,
      request_id: `aiorchestration_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      metadata: {
        site: 'aiorchestration.space',
        planId: plan.id,
        billing,
        annualDiscount: billing === 'annual' ? String(ANNUAL_DISCOUNT_MULTIPLIER) : '0',
      },
    })
    const checkoutUrl = extractCheckoutUrl(checkout)
    if (!checkoutUrl) throw new Error('Creem did not return a checkout URL.')
    return jsonResponse({ ok: true, checkoutUrl, provider: 'creem', planId: plan.id, billing, returnUrl: successUrl }, 200, request)
  } catch {
    return jsonResponse({ ok: false, error: 'Secure checkout could not be created yet.' }, 502, request)
  }
}

function handleRuntime(request, requestUrl) {
  return jsonResponse(
    {
      ok: true,
      publicAppOrigin: resolvePublicAppOrigin(requestUrl),
      deployment: 'cloudflare-workers-assets',
      paymentProvider: 'creem',
      defaultPlan: 'pro',
      defaultBilling: 'annual',
      annualDiscount: '50%',
      analytics: 'first-party-kv',
      ts: Date.now(),
    },
    200,
    request,
  )
}

async function handleAnalytics(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'Method not allowed.' }, 405, request)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid JSON body.' }, 400, request)
  }

  const events = Array.isArray(body?.events) ? body.events.slice(0, 40) : []
  const acceptedEvents = events.filter((event) => event && typeof event.id === 'string' && typeof event.name === 'string')
  const receivedAt = new Date().toISOString()
  let persisted = false

  try {
    if (env?.ANALYTICS_KV?.put && acceptedEvents.length) {
      const batchId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const day = receivedAt.slice(0, 10)
      const hour = receivedAt.slice(11, 13)
      await env.ANALYTICS_KV.put(
        `events/${day}/${hour}/${batchId}.json`,
        JSON.stringify({
          site: 'aiorchestration.space',
          receivedAt,
          country: request.headers.get('CF-IPCountry') || null,
          accepted: acceptedEvents.length,
          events: acceptedEvents,
        }),
        { expirationTtl: 60 * 60 * 24 * 180 },
      )
      persisted = true
    }
  } catch (error) {
    console.log(JSON.stringify({ type: 'analytics_store_error', site: 'aiorchestration.space', message: String(error?.message || error) }))
  }

  console.log(JSON.stringify({ type: 'analytics', site: 'aiorchestration.space', accepted: acceptedEvents.length, persisted }))
  return jsonResponse({ ok: true, accepted: acceptedEvents.length, persisted, store: persisted ? 'kv' : 'console' }, 202, request)
}

function buildSitemapXml() {
  const today = new Date().toISOString().slice(0, 10)
  const urls = indexablePaths
    .map((path) => {
      const priority = path === '/' ? '1.0' : path === '/privacy' || path === '/terms' ? '0.4' : path === '/pricing' ? '0.9' : '0.78'
      const changefreq = path === '/' || path === '/pricing' ? 'weekly' : 'monthly'
      const canonicalPath = path === '/' ? '/' : `${path}/`
      return `  <url>
    <loc>${LIVE_ORIGIN}${canonicalPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

function handleSitemap(request) {
  const headers = securityHeaders(request)
  headers.set('Content-Type', 'application/xml; charset=utf-8')
  headers.set('Cache-Control', 'public, max-age=3600')
  return new Response(buildSitemapXml(), { status: 200, headers })
}

function handleRobots(request) {
  const headers = securityHeaders(request)
  headers.set('Content-Type', 'text/plain; charset=utf-8')
  headers.set('Cache-Control', 'public, max-age=3600')
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /checkout/done/
Sitemap: ${LIVE_ORIGIN}/sitemap.xml
`
  return new Response(body, { status: 200, headers })
}

async function fetchAsset(request, env) {
  if (!env?.SITE_ASSETS?.fetch) {
    return new Response('Cloudflare asset binding is unavailable.', {
      status: 500,
      headers: securityHeaders(request),
    })
  }

  const requestUrl = new URL(request.url)
  const normalizedPath = requestUrl.pathname.replace(/\/+$/, '') || '/'

  if (staticAssetPaths.has(normalizedPath)) {
    const assetUrl = new URL(request.url)
    assetUrl.pathname = normalizedPath === '/' ? '/' : `${normalizedPath}/index.html`
    const assetResponse = await env.SITE_ASSETS.fetch(new Request(assetUrl.toString(), request))
    if (assetResponse.status !== 404) return withSecurityHeaders(assetResponse, request)
  }

  const response = await env.SITE_ASSETS.fetch(request)
  return withSecurityHeaders(response, request)
}

function withSecurityHeaders(response, request) {
  const headers = new Headers(response.headers)
  for (const [key, value] of securityHeaders(request)) {
    headers.set(key, value)
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}

export async function handleRequest(request, env) {
  const requestUrl = new URL(request.url)

  if (request.method === 'OPTIONS') return handleOptions(request)
  if (requestUrl.pathname === '/api/runtime') return handleRuntime(request, requestUrl)
  if (requestUrl.pathname === '/api/checkout') return handleCheckout(request, env, requestUrl)
  if (requestUrl.pathname === '/api/analytics/events') return handleAnalytics(request, env)

  const httpsRedirect = maybeRedirectToHttps(requestUrl)
  if (httpsRedirect) return httpsRedirect

  const wwwRedirect = maybeRedirectWww(requestUrl)
  if (wwwRedirect) return wwwRedirect

  if (requestUrl.pathname === '/sitemap.xml') return handleSitemap(request)
  if (requestUrl.pathname === '/robots.txt') return handleRobots(request)

  return fetchAsset(request, env)
}

const worker = {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env)
    } catch {
      return jsonResponse({ ok: false, error: 'Internal server error.' }, 500, request)
    }
  },
}

export default worker
