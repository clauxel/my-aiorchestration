import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Governed Agent Skills Checklist",
  description:
    "Plan governed agent skills with allowed commands, rules, approvals, budget limits, connectors, and audit evidence for production agent workflows.",
  alternates: {
    canonical: "https://aiorchestration.space/resources/governed-agent-skills/",
  },
};

const skillRows = [
  ["Allowed skills", "Name the tools, commands, APIs, and connectors an agent can use.", "Approved skill list with owner and purpose."],
  ["Blocked actions", "List actions that require a human or should never run.", "Deny list for payments, deletes, exports, and external sends."],
  ["Rules", "Bind each skill to context, input shape, limits, and expected output.", "Rule card with examples and failure states."],
  ["Approvals", "Decide when a reviewer must approve the next step.", "Approval node before spend, data sharing, or irreversible actions."],
  ["Audit", "Capture enough evidence to review the workflow later.", "Run log with skill name, inputs, outputs, status, and cost."],
];

export default function GovernedAgentSkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Governance
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Governed agent skills checklist
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Governed skills turn a broad autonomous agent into a controlled workflow. Define what the agent may do, when it must ask, and what evidence it must leave behind.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-12">
            <aside className="rounded-2xl border border-indigo-500/20 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold text-white mb-4">Skill card template</h2>
              <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs leading-relaxed text-slate-300">{`{
  "skill": "send_customer_reply",
  "allowed_when": "ticket classified and draft reviewed",
  "approval_required": true,
  "budget_limit": "one model call per draft",
  "evidence": ["input", "draft", "reviewer", "sent_status"]
}`}</pre>
            </aside>

            <div className="rounded-2xl border border-indigo-500/20 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Governance checks</h2>
              <div className="space-y-4">
                {skillRows.map(([title, detail, output]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="text-sm font-semibold text-indigo-300 mb-1">{title}</h3>
                    <p className="text-sm text-slate-300 mb-2">{detail}</p>
                    <p className="text-xs text-slate-500">{output}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/20 to-slate-900 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Where this fits in AiOrchestration</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              Put governance into the workflow graph: route low-risk tasks automatically, add approvals before sensitive actions, and keep logs tied to the node that used each skill.
            </p>
            <Link href="/resources/agent-orchestration-tool/" className="inline-flex rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors">
              Back to orchestration checklist
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
