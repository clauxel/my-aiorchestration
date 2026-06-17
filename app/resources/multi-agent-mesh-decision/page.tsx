import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Multi-Agent Mesh Decision Page",
  description:
    "Decide whether a team needs a multi-agent mesh, a visual workflow graph, a queue, or a human approval route for agent orchestration.",
  alternates: {
    canonical: "https://aiorchestration.space/resources/multi-agent-mesh-decision/",
  },
};

const paths = [
  {
    name: "Visual workflow graph",
    when: "The business process is known and repeatable.",
    risk: "Overfitting the graph before real users test it.",
    output: "Use templates, branches, cost limits, and execution logs.",
  },
  {
    name: "Multi-agent mesh",
    when: "Specialized agents need to negotiate, delegate, or review each other.",
    risk: "Harder debugging and higher model spend.",
    output: "Add role boundaries, shared state, and review checkpoints.",
  },
  {
    name: "Queue plus reviewer",
    when: "Work is sensitive, high value, or externally visible.",
    risk: "Slower throughput if approval rules are too broad.",
    output: "Route drafts to humans before send, spend, export, or delete actions.",
  },
  {
    name: "Single agent run",
    when: "The task is short, low risk, and easy to replay.",
    risk: "Hidden escalation if the task grows in scope.",
    output: "Use a small workflow with a clear stop condition.",
  },
];

export default function MultiAgentMeshDecisionPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Decision guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Multi-agent mesh or workflow graph?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              A mesh is useful when agents truly need to coordinate. Many production teams are better served by a visual graph, explicit queues, and human approvals until the work pattern proves stable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {paths.map((path) => (
              <article key={path.name} className="rounded-2xl border border-indigo-500/20 bg-slate-900 p-6">
                <h2 className="text-xl font-bold text-white mb-3">{path.name}</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-indigo-300 font-semibold">Use when</dt>
                    <dd className="text-slate-400">{path.when}</dd>
                  </div>
                  <div>
                    <dt className="text-indigo-300 font-semibold">Risk</dt>
                    <dd className="text-slate-400">{path.risk}</dd>
                  </div>
                  <div>
                    <dt className="text-indigo-300 font-semibold">Recommended output</dt>
                    <dd className="text-slate-400">{path.output}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Budget routing rule</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              Start with a graph when cost, ownership, and approval paths matter more than open-ended autonomy. Move to mesh patterns only when specialized agents repeatedly need to exchange state or review one another.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/resources/governed-agent-skills/" className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
                Plan governed skills
              </Link>
              <Link href="/resources/tools/" className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-indigo-500/50 transition-colors">
                Compare tools
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
