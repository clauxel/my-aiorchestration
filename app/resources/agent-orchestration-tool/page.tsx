import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agent Orchestration Tool Checklist",
  description:
    "Evaluate an agent orchestration tool by routing, skills governance, budget controls, model selection, workflow logs, and production handoff evidence.",
  alternates: {
    canonical: "https://aiorchestration.space/resources/agent-orchestration-tool/",
  },
};

const checks = [
  ["Routing", "Can the workflow send each task to the right model, tool, or human reviewer?", "Branch rules, fallback paths, and routing logs are visible."],
  ["Skills", "Are allowed commands, tools, and connectors defined before execution?", "Each workflow lists approved skills and blocked actions."],
  ["Budget", "Can teams cap spend before long-running agents start?", "Per-node costs, run limits, and escalation thresholds are set."],
  ["Evidence", "Can operators explain why an agent took a step?", "Logs include model, input, output, tool call, status, and reviewer notes."],
  ["Release", "Can the workflow move from draft to production without hidden behavior?", "Templates, tests, ownership, and rollback steps are documented."],
];

export default function AgentOrchestrationToolPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Resources
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Agent orchestration tool checklist for production workflows
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Use this checklist to compare agent orchestration tools by the controls that matter after a demo: routing, governed skills, cost limits, execution logs, and release evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-12">
            <div className="rounded-2xl border border-indigo-500/20 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Evaluation matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="py-3 pr-4 text-left">Area</th>
                      <th className="py-3 pr-4 text-left">Question</th>
                      <th className="py-3 text-left">Pass signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checks.map(([area, question, signal]) => (
                      <tr key={area} className="border-b border-white/5">
                        <td className="py-4 pr-4 font-semibold text-indigo-300">{area}</td>
                        <td className="py-4 pr-4 text-slate-300">{question}</td>
                        <td className="py-4 text-slate-400">{signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <aside className="rounded-2xl border border-indigo-500/20 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold text-white mb-4">Best fit</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                AiOrchestration is strongest when a team needs a visual workflow surface with model routing, reusable templates, cost visibility, and operational review before agent workflows run repeatedly.
              </p>
              <Link
                href="/resources/tools/"
                className="inline-flex rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Compare orchestration tools
              </Link>
            </aside>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/resources/governed-agent-skills/" className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-indigo-500/50 transition-colors">
              <h2 className="text-lg font-bold text-white mb-2">Governed agent skills</h2>
              <p className="text-sm text-slate-400">Define safe commands, rules, review points, and blocked actions before agents run.</p>
            </Link>
            <Link href="/resources/multi-agent-mesh-decision/" className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-indigo-500/50 transition-colors">
              <h2 className="text-lg font-bold text-white mb-2">Multi-agent mesh decisions</h2>
              <p className="text-sm text-slate-400">Choose between a mesh, workflow graph, queue, or human approval route.</p>
            </Link>
            <Link href="/pricing/" className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-indigo-500/50 transition-colors">
              <h2 className="text-lg font-bold text-white mb-2">Production pricing</h2>
              <p className="text-sm text-slate-400">Review execution limits, logs, support levels, and annual workflow capacity.</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
