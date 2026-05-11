"use client";

import Link from "next/link";

function trackEvent(name: string, props: Record<string, string>) {
  if (typeof window !== "undefined") {
    window.aiorchestrationTrack?.(name, props);
  }
}

const nodes = [
  { label: "Webhook trigger", meta: "New support email", x: "left-6", y: "top-8", tone: "from-cyan-500 to-blue-500" },
  { label: "Claude classifier", meta: "intent + urgency", x: "left-52", y: "top-24", tone: "from-violet-500 to-indigo-500" },
  { label: "Branch", meta: "refund, bug, sales", x: "right-48", y: "top-10", tone: "from-amber-500 to-orange-500" },
  { label: "GPT-4o reply", meta: "draft response", x: "right-8", y: "top-32", tone: "from-emerald-500 to-teal-500" },
  { label: "Slack + Email", meta: "send or escalate", x: "right-40", y: "bottom-36", tone: "from-fuchsia-500 to-purple-500" },
  { label: "Cost monitor", meta: "$0.034 this run", x: "right-20", y: "bottom-8", tone: "from-slate-500 to-slate-400" },
];

const mobileSteps = [
  ["Webhook trigger", "New support email"],
  ["Claude classifier", "intent + urgency"],
  ["Branch", "refund, bug, sales"],
  ["GPT-4o reply", "draft response"],
  ["Slack + Email", "send or escalate"],
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96)_0%,rgba(2,6,23,1)_46%,rgba(15,64,72,0.52)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-sm mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Claude, GPT-4o, Gemini, webhooks, Slack, email
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-5 md:mb-6 leading-tight">
              <span className="text-white">AI Agent Orchestration</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                without fragile glue code
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Design agent workflows on a visual canvas, route tasks through the right model, and know the cost of every execution before it surprises your budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 md:mb-12">
              <Link
                href="/pricing"
                onClick={() => trackEvent("cta_clicked", { location: "hero_primary" })}
                className="px-8 py-3.5 md:py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
              >
                Start with Pro annual
              </Link>
              <a
                href="#features"
                onClick={() => trackEvent("cta_clicked", { location: "hero_features" })}
                className="px-8 py-3.5 md:py-4 text-base font-semibold rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                See workflow templates
              </a>
            </div>

            <div className="md:hidden mx-auto mb-8 max-w-sm overflow-hidden rounded-xl border border-white/10 bg-slate-950/90 text-left shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs text-emerald-300">run cost: $0.034</div>
              </div>
              <div className="p-4 space-y-3">
                {mobileSteps.map(([label, meta], index) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-semibold text-cyan-300">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">{label}</div>
                      <div className="text-xs text-slate-500">{meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 text-center lg:text-left">
              {[
                { value: "8", label: "business templates" },
                { value: "$0.034", label: "sample run cost" },
                { value: "50", label: "free runs/month" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-indigo-950/40 overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs text-slate-400">Customer Reply Workflow</div>
                <div className="text-xs text-emerald-300">live cost: $0.034</div>
              </div>
              <div className="relative h-[520px] bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:28px_28px]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 520" fill="none" aria-hidden="true">
                  <path d="M128 92 C220 92 214 151 306 151" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 8" />
                  <path d="M408 151 C506 151 486 94 584 94" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 8" />
                  <path d="M620 142 C650 170 650 210 626 242" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 8" />
                  <path d="M380 196 C370 270 332 344 282 382" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 8" />
                  <path d="M462 200 C508 290 562 352 622 388" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 8" />
                  <defs>
                    <linearGradient id="line" x1="0" x2="1">
                      <stop stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {nodes.map((node) => (
                  <div
                    key={node.label}
                    className={`absolute ${node.x} ${node.y} w-44 rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-xl`}
                  >
                    <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${node.tone} mb-3`} />
                    <div className="text-sm font-semibold text-white">{node.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{node.meta}</div>
                  </div>
                ))}

                <div className="absolute left-6 bottom-8 w-64 rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-300 mb-2">Execution log</div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>08:41:13 webhook received</p>
                    <p>08:41:14 Claude classified: refund</p>
                    <p>08:41:15 GPT-4o drafted reply</p>
                    <p>08:41:16 Slack approval sent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
