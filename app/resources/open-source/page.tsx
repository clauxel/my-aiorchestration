import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Open Source AI Agent Orchestration - Guide 2026",
  description:
    "Complete guide to open-source AI agent orchestration: when to choose OSS vs. commercial, self-hosting costs, top frameworks, and step-by-step setup.",
};

export default function OpenSourcePage() {
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
              Open Source AI Agent Orchestration
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Open-source orchestration gives you full control over your AI workflows—no vendor lock-in, complete transparency, and infinite customization. But it also comes with real costs. Here&apos;s everything you need to make an informed decision.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What is open-source AI orchestration?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Open-source orchestration frameworks provide the code you need to connect AI models, manage state, route between agents, and execute complex workflows—all running on your own infrastructure. Unlike commercial platforms, you own every line of code, every API call, and every byte of data.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The major open-source frameworks include <strong className="text-slate-300">LangChain</strong> (general-purpose), <strong className="text-slate-300">LangGraph</strong> (graph-based state management), <strong className="text-slate-300">AutoGen</strong> (multi-agent conversations), <strong className="text-slate-300">CrewAI</strong> (role-based teams), and <strong className="text-slate-300">Haystack</strong> (NLP pipelines).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">When to choose open source</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wider">Choose OSS when</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-green-400">+</span> Your team has strong Python expertise</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> You have strict data residency requirements</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> You need deep customization of agent logic</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> You want to avoid SaaS vendor lock-in</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> Your workflows require proprietary integrations</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> You have a dedicated MLOps or platform team</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wider">Avoid OSS when</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-red-400">-</span> Speed to production is critical</li>
                    <li className="flex gap-2"><span className="text-red-400">-</span> Team lacks backend/Python skills</li>
                    <li className="flex gap-2"><span className="text-red-400">-</span> You need built-in monitoring and observability</li>
                    <li className="flex gap-2"><span className="text-red-400">-</span> Managing infrastructure isn&apos;t your core business</li>
                    <li className="flex gap-2"><span className="text-red-400">-</span> You need non-technical team members to build workflows</li>
                    <li className="flex gap-2"><span className="text-red-400">-</span> Real-time cost visibility matters</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Self-hosting cost analysis</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                &ldquo;Free&rdquo; open-source software is never truly free. Here&apos;s a realistic cost breakdown for a medium-sized team:
              </p>
              <div className="bg-slate-900 border border-indigo-500/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium">Cost category</th>
                      <th className="text-right px-5 py-3 text-slate-400 font-medium">Monthly estimate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { item: "Cloud infrastructure (AWS/GCP compute)", cost: "$200–$800" },
                      { item: "Engineer time to maintain & update", cost: "$1,500–$4,000" },
                      { item: "Monitoring & observability tools", cost: "$50–$200" },
                      { item: "Storage & database costs", cost: "$30–$150" },
                      { item: "Security audits & patches", cost: "$100–$500" },
                    ].map((row) => (
                      <tr key={row.item}>
                        <td className="px-5 py-3 text-slate-300">{row.item}</td>
                        <td className="px-5 py-3 text-right text-indigo-300 font-medium">{row.cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-800/50">
                      <td className="px-5 py-3 text-white font-semibold">Total estimated monthly cost</td>
                      <td className="px-5 py-3 text-right text-yellow-400 font-bold">$1,880–$5,650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Compare: AiOrchestration Pro is $49.5/mo (annual). The break-even is rarely in favor of self-hosting for teams under 50 people.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Getting started with LangChain (self-hosted)</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                If you&apos;ve evaluated the trade-offs and decided to go open source, here&apos;s a minimal self-hosting setup with LangChain:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-950 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">Step 1 – Install dependencies</p>
                  <pre className="text-xs text-slate-300 overflow-x-auto font-mono">
{`pip install langchain langchain-openai langchain-anthropic
pip install langgraph chromadb`}
                  </pre>
                </div>

                <div className="bg-slate-950 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">Step 2 – Create a basic agent</p>
                  <pre className="text-xs text-slate-300 overflow-x-auto font-mono">
{`from langchain_openai import ChatOpenAI
from langchain.agents import create_react_agent, AgentExecutor
from langchain_core.prompts import PromptTemplate
from langchain_community.tools import DuckDuckGoSearchRun

llm = ChatOpenAI(model="gpt-4o", temperature=0)
tools = [DuckDuckGoSearchRun()]

prompt = PromptTemplate.from_template("""
Answer the following questions. Use tools when needed.
Tools: {tools}
Question: {input}
Scratchpad: {agent_scratchpad}
""")

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
result = executor.invoke({"input": "What AI frameworks launched in 2024?"})`}
                  </pre>
                </div>

                <div className="bg-slate-950 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">Step 3 – Add observability (LangSmith)</p>
                  <pre className="text-xs text-slate-300 overflow-x-auto font-mono">
{`import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "your-langsmith-key"
os.environ["LANGCHAIN_PROJECT"] = "my-agent-project"
# All runs are now traced in LangSmith dashboard`}
                  </pre>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The hybrid approach</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Many teams start with AiOrchestration for rapid prototyping and production deployment, then migrate specific high-volume or custom workflows to self-hosted frameworks as needed. AiOrchestration&apos;s webhook integration makes it straightforward to call self-hosted agents as nodes within a visual workflow.
              </p>
              <p className="text-slate-400 leading-relaxed">
                This gives you the best of both worlds: fast iteration for most workflows and full control where it genuinely matters.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Skip the infrastructure headache</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              Get production-ready AI orchestration in minutes, not weeks.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all"
            >
              Try AiOrchestration free &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
