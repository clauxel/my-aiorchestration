import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration on GitHub – Top Repos & Frameworks",
  description:
    "Curated list of the best AI agent orchestration GitHub repositories: LangChain, AutoGen, CrewAI, LangGraph, Haystack, SuperAGI, and more. Star counts, use cases, and comparison.",
};

const repos = [
  {
    name: "langchain-ai/langchain",
    stars: "93k+",
    language: "Python",
    description:
      "The original LangChain framework for building context-aware reasoning applications. Extensive ecosystem of integrations, agents, tools, and chains.",
    useCases: ["RAG pipelines", "conversational agents", "document Q&A", "tool-use agents"],
    url: "https://github.com/langchain-ai/langchain",
    badge: "Most Popular",
  },
  {
    name: "microsoft/autogen",
    stars: "35k+",
    language: "Python",
    description:
      "Microsoft's framework for multi-agent conversations. Enables groups of AI agents to collaborate on complex tasks through structured dialogue.",
    useCases: ["multi-agent problem solving", "automated code generation", "research workflows"],
    url: "https://github.com/microsoft/autogen",
    badge: "Microsoft",
  },
  {
    name: "joaomdmoura/crewai",
    stars: "22k+",
    language: "Python",
    description:
      "Role-based multi-agent framework where AI agents collaborate like a crew. Define roles, goals, and backstories for each agent in a structured team.",
    useCases: ["content teams", "research crews", "sales pipelines", "project management"],
    url: "https://github.com/joaomdmoura/crewai",
    badge: "Trending",
  },
  {
    name: "langchain-ai/langgraph",
    stars: "7k+",
    language: "Python",
    description:
      "Graph-based orchestration framework built on LangChain. Model agent logic as directed acyclic graphs (DAGs) with explicit state management.",
    useCases: ["stateful workflows", "cyclic agent reasoning", "human-in-the-loop", "complex branching"],
    url: "https://github.com/langchain-ai/langgraph",
    badge: "By LangChain",
  },
  {
    name: "deepset-ai/haystack",
    stars: "17k+",
    language: "Python",
    description:
      "Production-ready NLP framework for building search systems and pipelines. Strong focus on retrieval-augmented generation and document processing.",
    useCases: ["semantic search", "RAG applications", "document intelligence", "question answering"],
    url: "https://github.com/deepset-ai/haystack",
    badge: "Production",
  },
  {
    name: "TransformerOptimus/SuperAGI",
    stars: "15k+",
    language: "Python",
    description:
      "Open-source autonomous AI agent framework with a UI, tool ecosystem, and agent marketplace. Build, manage, and run autonomous AI agents.",
    useCases: ["autonomous task execution", "agent management UI", "tool integration", "agent marketplace"],
    url: "https://github.com/TransformerOptimus/SuperAGI",
    badge: "With UI",
  },
  {
    name: "Significant-Gravitas/AutoGPT",
    stars: "167k+",
    language: "Python",
    description:
      "One of the first autonomous GPT-4 agent experiments. Run tasks autonomously with memory, internet access, and file management capabilities.",
    useCases: ["autonomous research", "web browsing agents", "code generation", "task automation"],
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    badge: "Pioneer",
  },
  {
    name: "openai/swarm",
    stars: "18k+",
    language: "Python",
    description:
      "OpenAI's experimental framework for multi-agent orchestration with lightweight handoffs and context variables between agents.",
    useCases: ["agent handoffs", "specialist routing", "customer service bots", "multi-step reasoning"],
    url: "https://github.com/openai/swarm",
    badge: "By OpenAI",
  },
];

export default function GithubPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs mb-4">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Agent Orchestration on GitHub
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              The open-source AI agent ecosystem is growing rapidly. Here are the most important repositories for building, studying, and understanding AI agent orchestration—with real star counts, use cases, and guidance on when to use each.
            </p>
          </div>

          <div className="space-y-5 mb-16">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-indigo-300 hover:text-indigo-200 font-mono"
                    >
                      {repo.name}
                    </a>
                    <span className="px-2 py-0.5 text-xs bg-indigo-600/20 text-indigo-300 rounded-full">
                      {repo.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stars}
                    </span>
                    <span className="text-slate-600">{repo.language}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{repo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {repo.useCases.map((uc) => (
                    <span key={uc} className="px-2.5 py-1 text-xs bg-slate-800 text-slate-400 rounded-lg border border-white/5">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-slate-400 font-medium">Framework</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Multi-agent</th>
                    <th className="text-left py-2 text-slate-400 font-medium">No-code UI</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { fw: "LangChain", multi: "Yes", ui: "No", best: "General-purpose RAG & agents" },
                    { fw: "AutoGen", multi: "Yes", ui: "No", best: "Multi-agent conversations" },
                    { fw: "CrewAI", multi: "Yes", ui: "No", best: "Role-based agent teams" },
                    { fw: "LangGraph", multi: "Yes", ui: "No", best: "Stateful graph workflows" },
                    { fw: "Haystack", multi: "Partial", ui: "No", best: "Search & NLP pipelines" },
                    { fw: "AiOrchestration", multi: "Yes", ui: "Yes", best: "Visual, production workflows" },
                  ].map((row) => (
                    <tr key={row.fw}>
                      <td className="py-3 text-white font-medium">{row.fw}</td>
                      <td className="py-3 text-slate-400">{row.multi}</td>
                      <td className={`py-3 font-medium ${row.ui === "Yes" ? "text-green-400" : "text-slate-500"}`}>{row.ui}</td>
                      <td className="py-3 text-slate-400">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Want a visual alternative?</h2>
            <p className="text-slate-400 mb-5 text-sm">
              All these frameworks require writing code. AiOrchestration gives you the same power with a drag-and-drop canvas.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all"
            >
              Try it free &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
