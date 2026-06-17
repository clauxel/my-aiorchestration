# Website Changelog

## 2026-06-17 Safe Intent Capture Pages

- Added three supporting pages for adjacent agent-orchestration demand:
  - `/resources/agent-orchestration-tool/`
  - `/resources/governed-agent-skills/`
  - `/resources/multi-agent-mesh-decision/`
- Added a homepage resource section that links to the new pages without changing the homepage URL, title, H1, canonical, pricing, checkout, or core product positioning.
- Added the new URLs to `public/sitemap.xml` with 2026-06-17 lastmod values and to the Worker public-route allowlist.
- Verification: `npm run build` passed locally on 2026-06-17; git push and Cloudflare deployment pending.

## 2026-05-28 15:31 CST
- Change summary: Removed visible template residue, added SoftwareApplication/FAQ schema, added pricing-page H1, made pricing checkout CTA one-click NOWPayments, normalized NOWPayments secret handling, and configured the Worker payment secret.
- Touched files: app/page.tsx; app/layout.tsx; app/pricing/page.tsx; components/HeroSection.tsx; components/PricingSection.tsx; components/PaymentModal.tsx; worker/nowpayments.js.
- Verification: Built and deployed my-aiorchestration; live homepage/pricing have no template residue and /api/nowpayments-checkout returns a hosted nowpayments.io URL.
- Deployment/Git: Deployed to Cloudflare where applicable; no commit or push was created in this turn.
- Follow-up: Search/Bing/GSC metrics and payment conversions may need 24-72 hours or owner-side provider/search-console permissions before the ledger fully clears.
