# Website Changelog

## 2026-05-28 15:31 CST
- Change summary: Removed visible template residue, added SoftwareApplication/FAQ schema, added pricing-page H1, made pricing checkout CTA one-click NOWPayments, normalized NOWPayments secret handling, and configured the Worker payment secret.
- Touched files: app/page.tsx; app/layout.tsx; app/pricing/page.tsx; components/HeroSection.tsx; components/PricingSection.tsx; components/PaymentModal.tsx; worker/nowpayments.js.
- Verification: Built and deployed my-aiorchestration; live homepage/pricing have no template residue and /api/nowpayments-checkout returns a hosted nowpayments.io URL.
- Deployment/Git: Deployed to Cloudflare where applicable; no commit or push was created in this turn.
- Follow-up: Search/Bing/GSC metrics and payment conversions may need 24-72 hours or owner-side provider/search-console permissions before the ledger fully clears.
