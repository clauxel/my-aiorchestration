import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration Tools Comparison 2026",
  description:
    "Compare the top AI agent orchestration tools: AiOrchestration vs LangChain vs AutoGen vs CrewAI vs Zapier. Side-by-side feature tables, pros, cons, and pricing.",
};

const tools = [
  {
    name: "AiOrchestration",
    tagline: "Visual AI workflow builder for everyone",
    pricing: "From $14.5/mo (annual)",
    type: "SaaS Platform",
    pros: [
      "No-code drag-and-drop canvas",
      "Supports all major AI models out of the box",
      "Real-time cost monitoring",
      "Team collaboration built-in",
      "Production-ready with 99.9% SLA",
      "8 practical business workflow templates",
    ],
    cons: [
      "Less flexibility for custom Python code",
      "Requires subscription for full features",
    ],
    bestFor: "Teams wanting to automate with AI without engineering overhead",
    highlight: true,
  },
  {
    name: "LangChain",
    tagline: "Python framework for context-aware AI apps",
    pricing: "Open source (free)",
    type: "OSS Framework",
    pros: [
      "Extremely flexible and extensible",
      "Massive ecosystem of integrations",
      "Great for RAG pipelines",
      "Active community and documentation",
    ],
    cons: [
      "Requires Python knowledge",
      "No visual interface",
      "Steep learning curve",
      "Must manage own infrastructure",
      "Version compatibility issues",
    ],
    bestFor: "Python developers building custom AI applications",
    highlight: false,
  },
  {
    name: "AutoGen",
    tagline: "Multi-agent conversation framework by Microsoft",
    pricing: "Open source (free)",
    type: "OSS Framework",
    pros: [
      "Excellent for multi-agent conversations",
      "Backed by Microsoft Research",
      "Flexible agent configuration",
      "Good for code generation tasks",
    ],
    cons: [
      "Requires Python expertise",
      "Configuration can be complex",
      "No visual workflow editor",
      "Limited production tooling",
    ],
    bestFor: "Researchers and engineers building multi-agent systems",
    highlight: false,
  },
  {
    name: "CrewAI",
    tagline: "Role-based multi-agent collaboration",
    pricing: "Open source + paid cloud",
    type: "OSS Framework + SaaS",
    pros: [
      "Intuitive role/goal/backstory model",
      "Good for content & research teams",
      "Growing template ecosystem",
      "Cloud deployment option",
    ],
    cons: [
      "Code-first approach",
      "Limited conditional logic",
      "Smaller community than LangChain",
      "Less mature tooling",
    ],
    bestFor: "Teams simulating specialized agent roles",
    highlight: false,
  },
  {
    name: "Zapier",
    tagline: "Automation platform with AI actions",
    pricing: "From $19.99/mo",
    type: "No-code Automation",
    pros: [
      "True no-code interface",
      "Thousands of app integrations",
      "Easy to get started",
      "Good for simple automations",
    ],
    cons: [
      "Not designed for AI agent workflows",
      "Limited AI model flexibility",
      "Expensive at scale",
      "No multi-agent support",
      "Can't chain complex AI reasoning",
    ],
    bestFor: "Simple app-to-app automations with basic AI steps",
    highlight: false,
  },
];

const comparisonFeatures = [
  { feature: "Visual workflow editor", aio: true, langchain: false, autogen: false, crewai: false, zapier: true },
  { feature: "GPT-4o support", aio: true, langchain: true, autogen: true, crewai: true, zapier: "Limited" },
  { feature: "Claude support", aio: true, langchain: true, autogen: true, crewai: true, zapier: false },
  { feature: "Multi-agent orchestration", aio: true, langchain: true, autogen: true, crewai: true, zapier: false },
  { feature: "No Python required", aio: true, langchain: false, autogen: false, crewai: false, zapier: true },
  { feature: "Real-time cost monitoring", aio: true, langchain: false, autogen: false, crewai: false, zapier: false },
  { feature: "Team collaboration", aio: true, langchain: false, autogen: false, crewai: "Cloud only", zapier: true },
  { feature: "Pre-built templates", aio: "8 core", langchain: "Community", autogen: false, crewai: "Some", zapier: "7000+" },
  { feature: "Conditional branching", aio: true, langchain: true, autogen: true, crewai: "Limited", zapier: "Paths" },
  { feature: "Self-hostable", aio: false, langchain: true, autogen: true, crewai: true, zapier: false },
  { feature: "Execution history & logs", aio: "7–90 days", langchain: "Custom", autogen: "Custom", crewai: "Custom", zapier: "30 days" },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Agent Orchestration Tools Comparison 2026
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Choosing the right AI orchestration tool depends on your team&apos;s technical depth, workflow complexity, and scaling needs. Here&apos;s an honest breakdown of the top options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`rounded-2xl p-6 border ${
                  tool.highlight
                    ? "bg-gradient-to-b from-indigo-600/10 to-slate-900 border-indigo-500 ring-1 ring-indigo-500/50"
                    : "bg-slate-900 border-indigo-500/20"
                }`}
              >
                {tool.highlight && (
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-indigo-600 text-white rounded-full mb-3">
                    Our Platform
                  </span>
                )}
                <h2 className="text-lg font-bold text-white mb-1">{tool.name}</h2>
                <p className="text-xs text-slate-500 mb-1">{tool.type}</p>
                <p className="text-sm text-slate-400 mb-1">{tool.tagline}</p>
                <p className="text-sm font-medium text-indigo-300 mb-4">{tool.pricing}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wider">Pros</p>
                  <ul className="space-y-1.5">
                    {tool.pros.map((p) => (
                      <li key={p} className="flex gap-2 text-xs text-slate-300">
                        <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wider">Cons</p>
                  <ul className="space-y-1.5">
                    {tool.cons.map((c) => (
                      <li key={c} className="flex gap-2 text-xs text-slate-400">
                        <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Best for: </span>
                    {tool.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-6">Feature Comparison Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-slate-400 font-medium w-[28%]">Feature</th>
                    {["AiOrchestration", "LangChain", "AutoGen", "CrewAI", "Zapier"].map((t) => (
                      <th key={t} className={`py-3 text-center font-medium ${t === "AiOrchestration" ? "text-indigo-400" : "text-slate-400"}`}>
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonFeatures.map((row) => {
                    const vals = [row.aio, row.langchain, row.autogen, row.crewai, row.zapier];
                    return (
                      <tr key={row.feature}>
                        <td className="py-3 text-slate-300">{row.feature}</td>
                        {vals.map((v, i) => (
                          <td key={i} className="py-3 text-center">
                            {v === true ? (
                              <svg className="w-4 h-4 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : v === false ? (
                              <svg className="w-4 h-4 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <span className="text-xs text-slate-400">{v}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try the visual approach?</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              AiOrchestration gives you the flexibility of code-based frameworks with the ease of a no-code tool.
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
