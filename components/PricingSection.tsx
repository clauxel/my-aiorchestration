'use client'

import { useState } from "react";
import PaymentModal from "./PaymentModal";

const PRODUCTS = {
  starter: {
    monthly: "prod_77DygdbLUihOxceqHP4mmZ",
    annual: "prod_4ostXeuQBrhrPYkILi0poA",
  },
  pro: {
    monthly: "prod_7dsaUx8WAMcyLfDdjqDVOM",
    annual: "prod_7m7rQfw5bCSbMVb61BCoKK",
  },
  team: {
    monthly: "prod_6IEZdVvJF7AxzJBAO2PGfa",
    annual: "prod_4mFuYaqInQdVnhnTlNBmr1",
  },
};

function trackEvent(name: string, props: Record<string, string>) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, props);
  }
}

const plans = [
  {
    key: "starter",
    name: "Starter",
    monthlyPrice: 29,
    annualMonthlyPrice: 14.5,
    annualTotal: 174,
    description: "Perfect for individuals and small projects exploring AI automation.",
    features: [
      "Up to 3 active workflows",
      "5,000 agent executions/month",
      "GPT-4o & Claude integration",
      "10 pre-built templates",
      "Email support",
      "7-day execution history",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    key: "pro",
    name: "Pro",
    monthlyPrice: 99,
    annualMonthlyPrice: 49.5,
    annualTotal: 594,
    description: "For professionals and growing teams running production workflows.",
    features: [
      "Unlimited workflows",
      "50,000 agent executions/month",
      "All AI models (GPT-4o, Claude, Gemini)",
      "50 pre-built templates",
      "Conditional logic & branching",
      "Real-time cost dashboard",
      "Priority support",
      "30-day execution history",
      "Custom webhooks",
    ],
    cta: "Start with Pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    key: "team",
    name: "Team",
    monthlyPrice: 299,
    annualMonthlyPrice: 149.5,
    annualTotal: 1794,
    description: "For teams and enterprises that need scale, collaboration, and control.",
    features: [
      "Everything in Pro",
      "200,000 agent executions/month",
      "Team collaboration (up to 20 seats)",
      "Role-based access control",
      "SSO / SAML support",
      "Audit logs & compliance",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "Custom integrations",
      "90-day execution history",
    ],
    cta: "Start with Team",
    highlight: false,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProductUrl, setModalProductUrl] = useState("");

  const openModal = (planKey: string, billing: "monthly" | "annual") => {
    const productId = PRODUCTS[planKey as keyof typeof PRODUCTS][billing];
    const url = `https://creem.io/product/${productId}`;
    setModalProductUrl(url);
    setIsModalOpen(true);
    trackEvent("checkout_opened", {
      plan: planKey,
      billing_period: billing,
    });
  };

  return (
    <>
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-slate-900 border border-white/10 rounded-full p-1.5">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-white text-slate-900"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isAnnual
                    ? "bg-white text-slate-900"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Annual
                <span className="px-1.5 py-0.5 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                  Save 50%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-indigo-600/10 to-slate-900 border-indigo-500 ring-1 ring-indigo-500 shadow-lg shadow-indigo-500/10"
                    : "bg-slate-900 border-indigo-500/20 hover:border-indigo-500/40"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 mb-1">/mo</span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-slate-500 mt-1">
                      Billed ${plan.annualTotal}/year
                    </p>
                  )}
                </div>

                <button
                  onClick={() => openModal(plan.key, isAnnual ? "annual" : "monthly")}
                  className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all mb-6 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg
                        className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productUrl={modalProductUrl}
      />
    </>
  );
}
