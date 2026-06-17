import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import HeroSection from "@/components/HeroSection";

const features = [
  {
    title: "Drag-and-drop Canvas",
    description:
      "Build complex AI pipelines visually. Connect nodes with a click, rearrange steps intuitively, and see your workflow at a glance.",
    icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  },
  {
    title: "Multi-model Nodes",
    description:
      "Use GPT-4o, Claude, and Gemini in the same workflow. Route cheap tasks to fast models and reserve stronger models for reasoning.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "8 Workflow Starters",
    description:
      "Start with useful workflow patterns for email triage, customer support, data summaries, lead routing, executive briefs, and alerts.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Conditional Branching",
    description:
      "Branch workflows based on confidence, cost, customer status, or model output. Retry, escalate, or send the right response.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Cost Dashboard",
    description:
      "Track token usage and API spend per execution. Spot expensive nodes before they turn into a budget surprise.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Webhook, Slack, Email",
    description:
      "Trigger workflows from webhooks and ship outputs into Slack or email without a separate automation stack.",
    icon: "M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m3-4h4m-4 0a2 2 0 104 0m-4 0v8m4-8v8",
  },
];

const workflowStarters = [
  "Email classification and reply",
  "Customer support conversation",
  "Data summary to Slack",
  "Lead enrichment and routing",
  "Weekly executive brief",
  "Invoice exception triage",
  "Research digest",
  "Incident escalation",
];

const testimonials = [
  {
    quote:
      "The cost dashboard changed how we ship AI workflows. We can see exactly which node is expensive before it reaches production.",
    name: "Sarah Chen",
    role: "Head of Operations",
    company: "Marketly",
  },
  {
    quote:
      "We replaced three separate Python scripts with one visual workflow. Engineering now reviews the logic instead of maintaining glue code.",
    name: "Marcus Webb",
    role: "CTO",
    company: "Dataflow Systems",
  },
  {
    quote:
      "Our support team can update routing rules without waiting for a sprint. That is the part that finally made agent workflows stick.",
    name: "Priya Nair",
    role: "AI Product Manager",
    company: "Scaleup AI",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section id="features" className="py-20 md:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything a production agent workflow needs
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Design, trigger, branch, send, and monitor multi-agent workflows from one focused surface.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 mb-5 group-hover:bg-indigo-600/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Workflow starters that map to real work</h2>
                <p className="text-slate-400 leading-relaxed">
                  The first starters are intentionally practical: the jobs teams already ask AI to do, with enough structure to become reliable workflows rather than one-off prompts.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {workflowStarters.map((starter) => (
                  <div key={starter} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {starter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Agent orchestration planning guides</h2>
                <p className="text-slate-400 leading-relaxed">
                  Use the resource pages to decide when a visual graph, governed skills, budget routing, or a multi-agent mesh fits the workflow.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/resources/agent-orchestration-tool/" className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-indigo-500/50 transition-colors">
                  <h3 className="text-sm font-semibold text-white mb-2">Agent orchestration tool</h3>
                  <p className="text-xs text-slate-400">Evaluate routing, governed skills, budget controls, and release evidence.</p>
                </Link>
                <Link href="/resources/governed-agent-skills/" className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-indigo-500/50 transition-colors">
                  <h3 className="text-sm font-semibold text-white mb-2">Governed agent skills</h3>
                  <p className="text-xs text-slate-400">Define allowed actions, blocked actions, approvals, and audit logs.</p>
                </Link>
                <Link href="/resources/multi-agent-mesh-decision/" className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-indigo-500/50 transition-colors">
                  <h3 className="text-sm font-semibold text-white mb-2">Multi-agent mesh decision</h3>
                  <p className="text-xs text-slate-400">Choose between a graph, mesh, queue, or single-agent workflow.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="py-20 md:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for teams that care about reliability
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                The promise is simple: faster workflow launches without losing visibility into cost, logs, or ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600/30 to-slate-900 border border-indigo-500/30 p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Build the workflow you keep describing in meetings
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Keep Pro annual selected when the workflow proves it can save real hours.
              </p>
              <Link
                href="/pricing#choose-pro"
                className="inline-block px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
              >
                Start workflow &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
