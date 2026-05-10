'use client'

import { useEffect, useRef, useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productUrl: string;
}

export default function PaymentModal({ isOpen, onClose, productUrl }: PaymentModalProps) {
  const [loading, setLoading] = useState(true);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-black/60"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-indigo-500/30 bg-slate-950 shadow-2xl shadow-black/80 overflow-hidden"
        style={{ maxHeight: "90vh" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <p className="text-sm font-medium text-slate-300">Secure Checkout</p>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative" style={{ height: "70vh" }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-slate-400">Loading secure checkout...</p>
              </div>
            </div>
          )}
          <iframe
            src={productUrl}
            className="w-full h-full"
            onLoad={() => setLoading(false)}
            allow="payment"
            title="Secure Checkout"
          />
        </div>
      </div>
    </div>
  );
}
