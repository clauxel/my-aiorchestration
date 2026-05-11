import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration Jobs & Careers 2026",
  description:
    "Career guide for AI agent orchestration: in-demand skills, salary ranges ($120k–$200k+), job titles, companies hiring, and how to break into the field.",
};

const jobTitles = [
  { title: "AI Engineer", salary: "$140k – $200k", demand: "Very High", skills: ["LangChain", "Python", "OpenAI API", "RAG"] },
  { title: "ML Platform Engineer", salary: "$160k – $220k", demand: "High", skills: ["Kubernetes", "MLflow", "Ray", "orchestration frameworks"] },
  { title: "AI Solutions Architect", salary: "$150k – $210k", demand: "High", skills: ["system design", "multi-cloud", "LLM integration", "enterprise sales"] },
  { title: "Prompt Engineer / AI Workflow Developer", salary: "$120k – $170k", demand: "Very High", skills: ["prompt engineering", "LangChain", "workflow automation", "evals"] },
  { title: "AI Product Manager", salary: "$130k – $185k", demand: "High", skills: ["LLM knowledge", "product strategy", "data analysis", "stakeholder management"] },
  { title: "AI Automation Specialist", salary: "$90k – $140k", demand: "High", skills: ["no-code tools", "API integration", "process automation", "workflow design"] },
  { title: "LLM Research Engineer", salary: "$180k – $300k+", demand: "Medium", skills: ["PyTorch", "fine-tuning", "RLHF", "model evaluation"] },
  { title: "AI Infrastructure Engineer", salary: "$155k – $220k", demand: "Medium", skills: ["GPU clusters", "distributed systems", "inference optimization", "cloud"] },
];

const skills = [
  {
    category: "Frameworks & Libraries",
    items: ["LangChain / LangGraph", "AutoGen / CrewAI", "Haystack", "LlamaIndex", "Semantic Kernel"],
    priority: "Essential",
  },
  {
    category: "Programming",
    items: ["Python (async, type hints)", "TypeScript / JavaScript", "REST API design", "SQL / vector databases"],
    priority: "Essential",
  },
  {
    category: "AI Model APIs",
    items: ["OpenAI GPT-4o", "Anthropic Claude API", "Google Gemini API", "Hugging Face Transformers"],
    priority: "Essential",
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS / GCP / Azure", "Docker & Kubernetes", "Serverless functions", "CI/CD pipelines"],
    priority: "Important",
  },
  {
    category: "Data & Storage",
    items: ["Vector databases (Pinecone, Weaviate, Chroma)", "PostgreSQL / MongoDB", "Redis for caching", "S3 / blob storage"],
    priority: "Important",
  },
  {
    category: "Observability",
    items: ["LangSmith / Langfuse", "Prometheus / Grafana", "OpenTelemetry", "logging and tracing"],
    priority: "Nice to have",
  },
];

export default function JobsPage() {
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
              AI Agent Orchestration Jobs & Careers 2026
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              AI agent orchestration is one of the fastest-growing specializations in tech. Demand is outpacing supply by a wide margin—engineers with orchestration expertise are commanding salaries that rival senior SWE roles at top tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { value: "$140k", label: "Median AI Engineer salary (US)", sub: "Recent US market benchmark" },
              { value: "340%", label: "Job posting growth in 2024", sub: "YoY for AI agent roles" },
              { value: "18k", label: "Open AI orchestration roles", sub: "On LinkedIn, Indeed, Glassdoor" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-slate-300 font-medium">{s.label}</div>
                <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">Job titles & salary ranges</h2>
            <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium">Title</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium hidden md:table-cell">Salary (US, TC)</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium hidden lg:table-cell">Demand</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium hidden xl:table-cell">Key Skills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {jobTitles.map((j) => (
                    <tr key={j.title} className="hover:bg-white/5 transition-colors">
                      <td className="px-5 py-3.5 text-white font-medium">{j.title}</td>
                      <td className="px-5 py-3.5 text-indigo-300 font-medium hidden md:table-cell">{j.salary}</td>
                      <td className="px-5 py-3.5 hidden lg:table-cell">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          j.demand === "Very High"
                            ? "bg-green-500/20 text-green-400"
                            : j.demand === "High"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-slate-700 text-slate-400"
                        }`}>
                          {j.demand}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 hidden xl:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {j.skills.slice(0, 3).map((s) => (
                            <span key={s} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-400 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">In-demand skills by category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((s) => (
                <div key={s.category} className="bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-white">{s.category}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      s.priority === "Essential"
                        ? "bg-red-500/20 text-red-400"
                        : s.priority === "Important"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-slate-700 text-slate-400"
                    }`}>
                      {s.priority}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-xs text-slate-400 flex gap-2">
                        <span className="text-indigo-400 flex-shrink-0">&#8227;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">Companies actively hiring</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Anthropic", "OpenAI", "Google DeepMind", "Microsoft",
                "Salesforce", "ServiceNow", "Palantir", "Glean",
                "Harvey AI", "Sierra AI", "Writer", "Cohere",
                "Inflection AI", "Adept AI", "Cognition AI", "Letta AI",
              ].map((company) => (
                <div key={company} className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-center">
                  <p className="text-sm text-slate-300 font-medium">{company}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">How to break into AI orchestration</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Learn Python and async programming",
                  desc: "Most orchestration frameworks are Python-first. Understand async/await, type hints, and data classes. Spend 2–4 weeks on this if you&apos;re coming from another stack.",
                },
                {
                  step: "2",
                  title: "Build with LangChain + OpenAI",
                  desc: "The fastest way to build intuition for orchestration is to build a real project: a research assistant, email triage bot, or RAG-powered Q&A over your own documents.",
                },
                {
                  step: "3",
                  title: "Learn a visual orchestration platform",
                  desc: "Employers increasingly want engineers who can deliver fast. Knowing how to build production workflows in tools like AiOrchestration dramatically accelerates your output.",
                },
                {
                  step: "4",
                  title: "Understand evals and observability",
                  desc: "Production AI systems require measurement. Learn LangSmith, Langfuse, or Arize. Build evaluations for your agents. This separates mid-level from senior AI engineers.",
                },
                {
                  step: "5",
                  title: "Contribute to open source",
                  desc: "A GitHub profile with contributions to LangChain, CrewAI, or Haystack is a strong signal. Even good issues and documentation improvements are noticed.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold bg-indigo-600/30 text-indigo-300">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Practice on a real platform</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              Build portfolio projects with AiOrchestration to demonstrate your orchestration skills to employers.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all"
            >
              Start free &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
