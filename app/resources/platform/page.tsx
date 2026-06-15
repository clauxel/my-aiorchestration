import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What is an AI Agent Orchestration Platform?",
  description:
    "Learn what AI agent orchestration platforms are, how they work, key features to look for, architecture patterns, and why they're essential for modern AI automation.",
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What is an AI Agent Orchestration Platform?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              As AI models become more capable, the challenge shifts from &ldquo;what can AI do?&rdquo; to &ldquo;how do I coordinate multiple AI capabilities into reliable, scalable workflows?&rdquo; That&apos;s exactly what an AI agent orchestration platform solves.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The core definition</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                An <strong className="text-slate-300">AI agent orchestration platform</strong> is a system that coordinates multiple AI models, tools, and data sources to execute complex, multi-step tasks autonomously. Rather than a single AI model responding to a single prompt, orchestration chains together sequences of AI calls, decisions, and actions—passing context between steps and adapting behavior based on intermediate outputs.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Think of it like a conductor directing an orchestra: each AI model or tool is a musician with specific strengths, and the orchestration platform ensures they all play together at the right time, in the right sequence, with the right information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-5">How it works: the architecture</h2>
              <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-6 mb-5">
                <div className="flex flex-col gap-0">
                  {[
                    { step: "1", label: "Trigger", desc: "Workflow starts via webhook, schedule, API call, or user input", color: "from-indigo-600 to-indigo-500" },
                    { step: "2", label: "Input Processing", desc: "Parse, validate, and format the incoming data for downstream agents", color: "from-indigo-500 to-purple-500" },
                    { step: "3", label: "Agent Routing", desc: "The orchestrator decides which AI model or tool handles each step", color: "from-purple-500 to-purple-600" },
                    { step: "4", label: "Execution", desc: "Each node (GPT-4o, Claude, function, API) runs and returns output", color: "from-purple-600 to-indigo-600" },
                    { step: "5", label: "Conditional Logic", desc: "Branch based on output: retry, escalate, or continue to next step", color: "from-indigo-600 to-indigo-500" },
                    { step: "6", label: "Output", desc: "Final result delivered via webhook, email, database write, or API response", color: "from-indigo-500 to-purple-400" },
                  ].map((item, i, arr) => (
                    <div key={item.step} className="relative">
                      <div className="flex gap-4 items-start">
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${item.color}`}>
                          {item.step}
                        </div>
                        <div className="pb-6">
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="absolute left-4 top-8 w-px h-6 bg-indigo-500/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key features to look for</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Multi-model flexibility",
                    desc: "Support for multiple AI providers (OpenAI, Anthropic, Google) so you use the best model for each task.",
                  },
                  {
                    title: "State & context management",
                    desc: "Pass context between steps reliably. Maintain conversation history, intermediate results, and shared state.",
                  },
                  {
                    title: "Conditional branching",
                    desc: "Route workflow execution based on AI outputs, threshold conditions, or external data.",
                  },
                  {
                    title: "Error handling & retries",
                    desc: "Automatically retry failed steps, route to fallback agents, and alert on persistent failures.",
                  },
                  {
                    title: "Observability & logging",
                    desc: "Full execution traces, input/output logging, latency tracking, and cost attribution per step.",
                  },
                  {
                    title: "Scalability",
                    desc: "Handle parallel execution, queue management, and rate limiting as workflow volume grows.",
                  },
                  {
                    title: "Security & access control",
                    desc: "API key management, role-based permissions, and audit logs for enterprise compliance.",
                  },
                  {
                    title: "Integration ecosystem",
                    desc: "Native connectors for databases, APIs, cloud services, and communication tools.",
                  },
                ].map((f) => (
                  <div key={f.title} className="bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Architecture patterns</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Sequential Pipeline",
                    desc: "Steps execute one after another. Output of each step becomes input to the next. Best for linear processes like content generation → review → publish.",
                  },
                  {
                    name: "Parallel Fan-out",
                    desc: "Multiple agents run simultaneously on the same input. Results are aggregated. Best for research tasks where you want multiple perspectives.",
                  },
                  {
                    name: "Hierarchical (Manager/Worker)",
                    desc: "A supervisor agent decomposes tasks and assigns them to specialized worker agents. Best for complex, multi-domain problems.",
                  },
                  {
                    name: "Graph-based (DAG)",
                    desc: "Workflows modeled as directed acyclic graphs where any node can connect to any other. Best for complex conditional logic and cycles.",
                  },
                  {
                    name: "Event-driven",
                    desc: "Agents react to external events (webhooks, messages, database changes) asynchronously. Best for real-time monitoring and response systems.",
                  },
                ].map((p) => (
                  <div key={p.name} className="flex gap-4 bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{p.name}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why orchestration is now essential</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Single AI model calls have hit a ceiling. Complex real-world tasks—like automating a hiring pipeline, generating a market research report, or triaging customer support—require sequences of specialized steps that no single prompt can handle reliably.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Orchestration also unlocks cost optimization: routing simple classification tasks to cheaper, faster models (like GPT-4o mini or Claude Haiku) while reserving powerful models for synthesis and reasoning steps where quality matters most.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Teams that adopt orchestration typically see 60–80% reductions in AI API costs per task and 10x improvements in throughput compared to monolithic prompt approaches.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Build your first orchestrated workflow</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              AiOrchestration implements all these patterns visually. No code required.
            </p>
            <Link
              href="/pricing#choose-pro"
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all"
            >
              Start workflow &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
