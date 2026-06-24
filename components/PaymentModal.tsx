"use client";

import { useEffect, useRef, useState } from "react";
import type { BillingCycle } from "./PricingSection";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  billing: BillingCycle;
  planName?: string;
  planPrice?: string;
  planPeriod?: string;
}

function trackEvent(name: string, metadata: Record<string, string>) {
  if (typeof window !== "undefined") {
    window.aiorchestrationTrack?.(name, metadata);
  }
}

function centeredPopupFeatures(width = 780, height = 900) {
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  return `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`;
}

function writeLoadingPage(popup: Window | null, planName: string, provider: "polar" | "polar") {
  if (!popup) return;

  try {
    popup.document.title = "Opening secure checkout";
    const providerName = provider === "polar" ? "Polar" : "Polar";
    popup.document.body.innerHTML =
      `<main style="min-height:100vh;display:grid;place-items:center;background:#0a0a1a;color:#f8fafc;font-family:ui-sans-serif,system-ui,sans-serif;text-align:center;padding:32px">` +
      `<section><h1 style="font-size:22px;margin:0 0 8px">Opening secure checkout...</h1>` +
      `<p style="margin:0;color:#cbd5e1">Preparing your ${planName} payment window with ${providerName}.</p></section></main>`;
  } catch {}
}

export default function PaymentModal({
  isOpen,
  onClose,
  planId,
  billing,
  planName = "Pro",
  planPrice = "$49.5",
  planPeriod = "mo, billed annually",
}: PaymentModalProps) {
  const [status, setStatus] = useState<"ready" | "opening" | "opened" | "error">("ready");
  const [error, setError] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<Window | null>(null);
  const pollRef = useRef<number | null>(null);

  const closeModal = () => {
    if (pollRef.current !== null) {
      window.clearInterval(pollRef.current);
      pollRef.current = null;
    }
    setStatus("ready");
    setError("");
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "aiorchestration-checkout-complete") {
        trackEvent("checkout_success_return", { plan: planId, billing });
        closeModal();
        window.location.href = "/";
      }
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = "";
    };
  });

  async function openCheckout(provider: "polar" | "polar" = "polar") {
    setStatus("opening");
    setError("");
    trackEvent("checkout_open_start", { plan: planId, billing, paymentProvider: provider });

    const popup = window.open("", provider === "polar" ? "aiorchestration_polar_checkout" : "aiorchestration_polar_checkout", centeredPopupFeatures());
    popupRef.current = popup;
    writeLoadingPage(popup, planName, provider);

    try {
      const response = await fetch(provider === "polar" ? "/api/polar-checkout" : "/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, billing }),
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

      setStatus("opened");
      trackEvent("checkout_popup_opened", { plan: planId, billing, paymentProvider: provider });

      pollRef.current = window.setInterval(() => {
        if (!popupRef.current || popupRef.current.closed) {
          if (pollRef.current !== null) window.clearInterval(pollRef.current);
          pollRef.current = null;
          closeModal();
        }
      }, 900);
    } catch (checkoutError) {
      try {
        popup?.close();
      } catch {}
      setStatus("error");
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout could not be created.");
      trackEvent("checkout_error", { plan: planId, billing, paymentProvider: provider });
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.72)" }}
      onClick={(e) => {
        if (e.target === backdropRef.current) closeModal();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-indigo-500/30 bg-slate-950 shadow-2xl shadow-black/80 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Secure Checkout</span>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-1">Selected Plan</p>
              <h3 className="text-2xl font-bold text-white">{planName}</h3>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">{planPrice}</p>
              <p className="text-xs text-slate-400">/{planPeriod}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Secure payment" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Cancel anytime" },
              { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "All cards accepted" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                </svg>
                <span className="text-[10px] text-slate-400 text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>

          {status === "ready" ? (
            <div className="grid gap-3">
              <button
                onClick={() => void openCheckout("polar")}
                className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Checkout with Polar -&gt;
              </button>
              <button
                onClick={() => void openCheckout("polar")}
                className="w-full py-4 rounded-xl border border-white/10 bg-slate-900 font-bold text-white text-base transition-all duration-200 hover:bg-slate-800"
              >
                Try card checkout
              </button>
            </div>
          ) : status === "opening" ? (
            <div className="text-center py-3">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-slate-300 font-medium">Preparing secure checkout...</p>
            </div>
          ) : status === "opened" ? (
            <div className="text-center py-3">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-slate-300 font-medium">Checkout window is open</p>
              <p className="text-xs text-slate-500 mt-1">Complete payment in the secure checkout window. The homepage will stay here.</p>
              <button
                onClick={() => popupRef.current?.focus()}
                className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 underline"
              >
                Bring checkout window to front
              </button>
            </div>
          ) : (
            <div className="text-center py-3">
              <p className="text-sm text-red-300 font-medium">{error || "Checkout needs another try."}</p>
              <button
                onClick={() => void openCheckout("polar")}
                className="mt-4 w-full py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
              >
                Try again
              </button>
            </div>
          )}

          <p className="text-center text-xs text-slate-600 mt-4">
            Powered by Polar - SSL encrypted - PCI compliant
          </p>
        </div>
      </div>
    </div>
  );
}
