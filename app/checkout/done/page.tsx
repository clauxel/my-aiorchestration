import type { Metadata } from "next";
import CheckoutDoneBridge from "@/components/CheckoutDoneBridge";

export const metadata: Metadata = {
  title: "Checkout Complete",
  description: "Your AiOrchestration checkout is complete.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutDonePage() {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <CheckoutDoneBridge />
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-300 mb-3">
          Payment received
        </p>
        <h1 className="text-3xl font-bold text-white mb-3">Returning to AiOrchestration</h1>
        <p className="text-slate-400 max-w-md">
          Your checkout is complete. This window will return to the homepage automatically.
        </p>
      </section>
    </main>
  );
}
