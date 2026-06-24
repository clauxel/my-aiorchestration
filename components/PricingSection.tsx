"use client";

import { useEffect, useState } from "react";
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

function checkoutPopupFeatures(width = 780, height = 900) {
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  return `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`;
}

function writeCheckoutLoadingPage(popup: Window | null, planName: string) {
  if (!popup) return;

  try {
    popup.document.title = "Opening Polar checkout";
    popup.document.body.innerHTML =
      `<main style="min-height:100vh;display:grid;place-items:center;background:#0a0a1a;color:#f8fafc;font-family:ui-sans-serif,system-ui,sans-serif;text-align:center;padding:32px">` +
      `<section><h1 style="font-size:22px;margin:0 0 8px">Opening Polar checkout...</h1>` +
      `<p style="margin:0;color:#cbd5e1">Preparing your ${planName} payment window.</p></section></main>`;
  } catch {}
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
      "3 workflow starters",
      "Email output node",
      "1-day execution history",
    ],
    cta: "Review plans",
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
      "8 workflow starters",
      "Webhook triggers",
      "Slack and email outputs",
      "7-day execution history",
    ],
    cta: "Continue with Starter",
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
      "8 workflow starters plus custom copies",
      "Conditional branches",
      "Real-time API cost dashboard",
      "Priority support",
      "30-day execution history",
    ],
    cta: "Continue with Pro",
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
      "Shared workflow pattern library",
      "Advanced webhooks",
      "Audit-ready execution logs",
      "Dedicated onboarding",
      "90-day execution history",
    ],
    cta: "Continue with Team",
    paid: true,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isPlanFlowOpen, setIsPlanFlowOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[2]);

  useEffect(() => {
    const openDefaultPlan = () => {
      setIsAnnual(true);
      setSelectedPlan(plans[2]);
      setIsPlanFlowOpen(true);
      trackEvent("primary_cta_click", { plan: "pro", billing_period: "annual" });
    };

    const onChooseProAnnual = () => openDefaultPlan();
    window.addEventListener("aiorchestration:choose-pro-annual", onChooseProAnnual);

    if (window.sessionStorage.getItem("aiorchestration:pending-checkout") === "pro:annual") {
      window.sessionStorage.removeItem("aiorchestration:pending-checkout");
      window.setTimeout(openDefaultPlan, 0);
    }

    if (window.location.hash === "#choose-pro") {
      window.history.replaceState(null, "", window.location.pathname);
      window.setTimeout(openDefaultPlan, 0);
    }

    return () => window.removeEventListener("aiorchestration:choose-pro-annual", onChooseProAnnual);
  }, []);

  const openPlan = (plan: Plan) => {
    if (!plan.paid) {
      trackEvent("free_plan_selected", { plan: plan.key });
      const pricing = document.getElementById("pricing");
      pricing?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setSelectedPlan(plan);
    setIsPlanFlowOpen(true);
    trackEvent("plan_selected", {
      plan: plan.key,
      billing_period: isAnnual ? "annual" : "monthly",
    });
  };

  const openCheckoutForPlan = async (plan: Plan) => {
    if (!plan.paid) {
      openPlan(plan);
      return;
    }

    setSelectedPlan(plan);
    setIsPlanFlowOpen(false);
    trackEvent("checkout_continue", {
      plan: plan.key,
      billing_period: isAnnual ? "annual" : "monthly",
      location: "pricing_card",
    });

    const billingPeriod = isAnnual ? "annual" : "monthly";
    const popup = window.open("", "aiorchestration_polar_checkout", checkoutPopupFeatures());
    writeCheckoutLoadingPage(popup, plan.name);

    try {
      const response = await fetch("/api/polar-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.key, billing: billingPeriod }),
      });
      const payload = (await response.json()) as { ok?: boolean; checkoutUrl?: string; error?: string };

      if (!response.ok || !payload.ok || !payload.checkoutUrl) {
        throw new Error(payload.error || "Checkout could not be created.");
      }

      if (popup) {
        popup.location.href = payload.checkoutUrl;
      } else {
        window.open(payload.checkoutUrl, "_blank", "noopener,noreferrer");
      }

      trackEvent("checkout_popup_opened", {
        plan: plan.key,
        billing_period: billingPeriod,
        paymentProvider: "polar",
        location: "pricing_card",
      });
    } catch {
      try {
        popup?.close();
      } catch {}
      setIsModalOpen(true);
      trackEvent("checkout_error", {
        plan: plan.key,
        billing_period: billingPeriod,
        paymentProvider: "polar",
        location: "pricing_card",
      });
    }
  };

  const openPaymentStep = () => {
    if (!selectedPlan.paid) return;
    setIsPlanFlowOpen(false);
    setIsModalOpen(true);
    trackEvent("checkout_continue", {
      plan: selectedPlan.key,
      billing_period: isAnnual ? "annual" : "monthly",
    });
  };

  const billing: BillingCycle = isAnnual ? "annual" : "monthly";
  const paidPlans = plans.filter((plan) => plan.paid);
  const selectedMonthlyPrice = isAnnual ? selectedPlan.annualMonthlyPrice : selectedPlan.monthlyPrice;
  const selectedPlanTitle = `${selectedPlan.name} · ${isAnnual ? "Yearly" : "Monthly"}`;
  const selectedPlanNote = isAnnual
    ? `Billed $${selectedPlan.annualTotal}/year. Equivalent to $${selectedPlan.annualMonthlyPrice} per month.`
    : `$${selectedPlan.monthlyPrice} charged monthly.`;

  return (
    <>
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pro annual is selected by default
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Pro annual is the default path for serious workflow pilots and cuts the effective monthly price in half.
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
                Annual - 50% off
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
                    onClick={() => void openCheckoutForPlan(plan)}
                    data-checkout={plan.paid ? "hosted" : undefined}
                    data-plan={plan.paid ? plan.key : undefined}
                    data-billing={isAnnual ? "annual" : "monthly"}
                    aria-label={plan.paid ? `Checkout ${plan.name} ${isAnnual ? "annual" : "monthly"}` : plan.cta}
                    className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all mb-6 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    }`}
                  >
                    {!plan.paid ? plan.cta : `Checkout ${plan.name} ${isAnnual ? "annual" : "monthly"}`}
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

      {isPlanFlowOpen && (
        <div
          className="checkout-blur fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
          style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.72)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="aiorchestration-plan-flow-title"
          onClick={(event) => {
            if (event.currentTarget === event.target) setIsPlanFlowOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 shadow-2xl shadow-black/80 md:p-7">
            <button
              type="button"
              onClick={() => setIsPlanFlowOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close plan chooser"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-3xl pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Choose your plan</p>
              <h2 id="aiorchestration-plan-flow-title" className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Launch AiOrchestration with the right workflow tier
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Start workflow opens pricing first. Annual billing keeps the same path and cuts the recommended Pro plan
                to half price before secure checkout.
              </p>
            </div>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900 p-1.5">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                aria-pressed={!isAnnual}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  !isAnnual ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  isAnnual ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"
                }`}
              >
                Yearly <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">50% off</span>
              </button>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {paidPlans.map((plan) => {
                const active = selectedPlan.key === plan.key;
                const monthlyPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
                return (
                  <button
                    type="button"
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-indigo-400 bg-indigo-500/15 ring-1 ring-indigo-400"
                        : "border-white/10 bg-slate-900 hover:border-indigo-400/50"
                    }`}
                  >
                    <span className="text-sm font-semibold text-indigo-300">{plan.executions}</span>
                    <span className="mt-2 block text-xl font-bold text-white">{plan.name}</span>
                    <span className="mt-3 block text-sm leading-6 text-slate-400">{plan.description}</span>
                    <span className="mt-5 flex items-end gap-1 text-white">
                      <strong className="text-3xl">${monthlyPrice}</strong>
                      <span className="pb-1 text-sm text-slate-400">/mo</span>
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {isAnnual ? `Billed $${plan.annualTotal}/year` : "Billed monthly"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Selected plan</p>
                <h3 className="mt-1 text-xl font-bold text-white">{selectedPlanTitle}</h3>
                <p className="mt-1 text-sm text-slate-400">{selectedPlanNote}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsPlanFlowOpen(false)}
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  Not now
                </button>
                <button
                  type="button"
                  onClick={openPaymentStep}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-purple-500"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planId={selectedPlan.key}
        billing={billing}
        planName={selectedPlan.name}
        planPrice={`$${selectedMonthlyPrice}`}
        planPeriod={isAnnual ? `mo, annual billing, billed $${selectedPlan.annualTotal}/yr` : "mo"}
      />
    </>
  );
}
