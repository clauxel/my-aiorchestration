import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the AiOrchestration plan that fits your team. Start free, upgrade when you need more. Starter from $14.5/mo, Pro from $49.5/mo, Team from $149.5/mo (billed annually).",
};

const faqItems = [
  {
    q: "Is there a free trial?",
    a: "Every paid plan starts with a 14-day free trial. No credit card required to start. You'll only be charged at the end of the trial if you decide to continue.",
  },
  {
    q: "What counts as an agent execution?",
    a: "One agent execution is one complete run of a workflow from trigger to completion, regardless of how many nodes or AI model calls are involved internally.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately and are prorated. Downgrades take effect at the start of the next billing cycle.",
  },
  {
    q: "What AI models are supported?",
    a: "We support OpenAI GPT-4o, GPT-4o mini, GPT-3.5 Turbo; Anthropic Claude 3.5 Sonnet, Claude 3 Haiku; Google Gemini 1.5 Pro, Gemini 1.5 Flash; Mistral Large and Medium; and any OpenAI-compatible API endpoint.",
  },
  {
    q: "Do you offer refunds?",
    a: "We do not offer refunds except as required by applicable law. Please review our Terms of Service for full details. We encourage you to use the free trial before purchasing.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II compliant and do not use your workflow data to train AI models.",
  },
  {
    q: "What happens if I exceed my execution limit?",
    a: "We'll notify you when you reach 80% of your monthly limit. If you exceed it, workflows will pause until the next billing cycle or until you upgrade. No surprise charges.",
  },
  {
    q: "Do you offer discounts for non-profits or education?",
    a: "Yes, we offer a 50% discount for verified non-profits and educational institutions. Contact support@aigeamy.com with proof of eligibility.",
  },
];

const comparisonRows = [
  { feature: "Active workflows", free: "1", starter: "3", pro: "Unlimited", team: "Unlimited" },
  { feature: "Agent executions/mo", free: "500", starter: "5,000", pro: "50,000", team: "200,000" },
  { feature: "AI model integrations", free: "1", starter: "2", pro: "All models", team: "All models" },
  { feature: "Pre-built templates", free: "3", starter: "10", pro: "50+", team: "50+" },
  { feature: "Conditional logic", free: "No", starter: "No", pro: "Yes", team: "Yes" },
  { feature: "Cost dashboard", free: "No", starter: "Basic", pro: "Full", team: "Full" },
  { feature: "Execution history", free: "1 day", starter: "7 days", pro: "30 days", team: "90 days" },
  { feature: "Custom webhooks", free: "No", starter: "No", pro: "Yes", team: "Yes" },
  { feature: "Team seats", free: "1", starter: "1", pro: "3", team: "20" },
  { feature: "SSO / SAML", free: "No", starter: "No", pro: "No", team: "Yes" },
  { feature: "Audit logs", free: "No", starter: "No", pro: "No", team: "Yes" },
  { feature: "SLA guarantee", free: "No", starter: "No", pro: "No", team: "99.9%" },
  { feature: "Support", free: "Community", starter: "Email", pro: "Priority", team: "Dedicated" },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PricingSection />

        {/* Comparison Table */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Compare all plans
              </h2>
              <p className="text-slate-400">Feature-by-feature breakdown across every tier.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-indigo-500/20">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400 bg-slate-900 w-[30%]">
                      Feature
                    </th>
                    {["Free", "Starter", "Pro", "Team"].map((tier) => (
                      <th
                        key={tier}
                        className={`px-4 py-4 text-sm font-semibold text-center bg-slate-900 ${
                          tier === "Pro" ? "text-indigo-400" : "text-white"
                        }`}
                      >
                        {tier}
                        {tier === "Pro" && (
                          <span className="ml-1.5 text-xs bg-indigo-600/30 text-indigo-300 px-1.5 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 ${i % 2 === 0 ? "bg-slate-900/50" : "bg-slate-950/50"}`}
                    >
                      <td className="px-6 py-3.5 text-sm text-slate-300">{row.feature}</td>
                      {[row.free, row.starter, row.pro, row.team].map((val, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3.5 text-sm text-center ${
                            val === "No" ? "text-slate-600" : j === 2 ? "text-indigo-300 font-medium" : "text-slate-300"
                          }`}
                        >
                          {val === "Yes" ? (
                            <svg className="w-4 h-4 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : val === "No" ? (
                            <svg className="w-4 h-4 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="bg-slate-900 border border-indigo-500/20 rounded-xl p-6"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
