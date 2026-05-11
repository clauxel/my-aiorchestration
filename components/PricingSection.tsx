"use client";

import { useState } from "react";
import PaymentModal from "./PaymentModal";

export type BillingCycle = "monthly" | "annual";

type Plan = {
  key: "free" | "starter" | "pro" | "team";
  name: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  annualTotal: number;
  executions: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
  paid: boolean;
};

function trackEvent(name: string, props: Record<string, string>) {
  if (typeof window !== "undefined") {
    window.aiorchestrationTrack?.(name, props);
  }
}

const plans: Plan[] = [
  {
    key: "free",
    name: "Free",
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    annualTotal: 0,
    executions: "50 executions/mo",
    description: "Validate one workflow before bringing finance or engineering into the decision.",
    features: [
      "50 workflow executions/month",
      "1 active workflow",
      "GPT-4o mini node",
      "3 starter templates",
      "Email output node",
      "1-day execution history",
    ],
    cta: "Start free",
    paid: false,
  },
  {
    key: "starter",
    name: "Starter",
    monthlyPrice: 29,
    annualMonthlyPrice: 14.5,
    annualTotal: 174,
    executions: "500 executions/mo",
    description: "For solo operators and small teams shipping their first AI workflows.",
    features: [
      "500 workflow executions/month",
      "3 active workflows",
      "GPT-4o and Claude nodes",
      "8 business templates",
      "Webhook triggers",
      "Slack and email outputs",
      "7-day execution history",
    ],
    cta: "Choose Starter",
    paid: true,
  },
  {
    key: "pro",
    name: "Pro",
    monthlyPrice: 99,
    annualMonthlyPrice: 49.5,
    annualTotal: 594,
    executions: "5,000 executions/mo",
    description: "The production plan for teams running customer, sales, and data workflows.",
    features: [
      "5,000 workflow executions/month",
      "Unlimited workflows",
      "GPT-4o, Claude, and Gemini nodes",
      "8 business templates plus custom copies",
      "Conditional branches",
      "Real-time API cost dashboard",
      "Priority support",
      "30-day execution history",
    ],
    cta: "Checkout Pro",
    highlight: true,
    badge: "Recommended",
    paid: true,
  },
  {
    key: "team",
    name: "Team",
    monthlyPrice: 299,
    annualMonthlyPrice: 149.5,
    annualTotal: 1794,
    executions: "Unlimited executions",
    description: "For teams that need shared ownership, roles, audit trails, and rollout support.",
    features: [
      "Unlimited workflow executions",
      "Team workspace and roles",
      "All supported AI model nodes",
      "Shared template library",
      "Advanced webhooks",
      "Audit-ready execution logs",
      "Dedicated onboarding",
      "90-day execution history",
    ],
    cta: "Checkout Team",
    paid: true,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[2]);

  const openPlan = (plan: Plan) => {
    if (!plan.paid) {
      trackEvent("free_plan_selected", { plan: plan.key });
      const pricing = document.getElementById("pricing");
      pricing?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setSelectedPlan(plan);
    setIsModalOpen(true);
    trackEvent("plan_selected", {
      plan: plan.key,
      billing_period: isAnnual ? "annual" : "monthly",
    });
  };

  const billing: BillingCycle = isAnnual ? "annual" : "monthly";

  return (
    <>
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing that starts small and scales cleanly
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Start with 50 free monthly runs. Pro annual is selected by default for serious pilots and cuts the effective monthly price in half.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-slate-900 border border-white/10 rounded-full p-1.5">
              <button
                onClick={() => {
                  setIsAnnual(false);
                  trackEvent("billing_toggle", { billing_period: "monthly" });
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  setIsAnnual(true);
                  trackEvent("billing_toggle", { billing_period: "annual" });
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isAnnual ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"
                }`}
              >
                Annual
                <span className="px-1.5 py-0.5 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                  Save 50%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {plans.map((plan) => {
              const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

              return (
                <div
                  key={plan.key}
                  className={`relative rounded-2xl p-6 border transition-all flex flex-col ${
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
                    <p className="text-xs font-semibold text-indigo-300 mb-3">{plan.executions}</p>
                    <p className="text-sm text-slate-400">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-white">
                        {price === 0 ? "$0" : `$${price}`}
                      </span>
                      <span className="text-slate-400 mb-1">/mo</span>
                    </div>
                    {isAnnual && plan.paid ? (
                      <p className="text-xs text-slate-500 mt-1">
                        Billed ${plan.annualTotal}/year
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500 mt-1">
                        {plan.paid ? "Billed monthly" : "No card required"}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => openPlan(plan)}
                    className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all mb-6 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg
                          className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planId={selectedPlan.key}
        billing={billing}
        planName={selectedPlan.name}
        planPrice={`$${isAnnual ? selectedPlan.annualMonthlyPrice : selectedPlan.monthlyPrice}`}
        planPeriod={isAnnual ? `mo, annual billing, billed $${selectedPlan.annualTotal}/yr` : "mo"}
      />
    </>
  );
}
