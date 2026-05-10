'use client'

import Link from "next/link";

function trackEvent(name: string, props: Record<string, string>) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, props);
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Now supporting Claude 3.5, GPT-4o, and Gemini 1.5 Pro
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-white">Orchestrate AI Agents</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Visually
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Connect GPT-4o, Claude & Gemini into powerful automated workflows.{" "}
          <span className="text-slate-300">No code required.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/pricing"
            onClick={() => trackEvent("cta_clicked", { location: "hero_primary" })}
            className="px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
          >
            Start Free &rarr;
          </Link>
          <a
            href="#features"
            onClick={() => trackEvent("cta_clicked", { location: "hero_demo" })}
            className="px-8 py-4 text-base font-semibold rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            Watch Demo
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
          {[
            { value: "500+", label: "Teams using AiOrchestration" },
            { value: "99.9%", label: "Platform uptime" },
            { value: "<2s", label: "Avg. execution time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
