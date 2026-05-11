import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration with LangChain – Integration Guide",
  description:
    "Complete guide to using LangChain for AI agent orchestration: chains, agents, tools, LangGraph, comparison with visual platforms, and migration guide.",
};

export default function LangchainPage() {
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
              AI Agent Orchestration with LangChain
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              LangChain is the most widely adopted open-source framework for building AI-powered applications. This guide covers how to use LangChain for agent orchestration, when it shines, and when a visual platform like AiOrchestration is a better fit.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What LangChain does well</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Massive integration library", desc: "100+ document loaders, vector store connectors, LLM providers, and tools maintained by a large community." },
                  { title: "LCEL (LangChain Expression Language)", desc: "Composable, declarative syntax for building chains. Supports streaming, async, and batch execution out of the box." },
                  { title: "LangGraph for stateful workflows", desc: "Build cyclic, stateful agent graphs where each node can read/write shared state—perfect for multi-step reasoning." },
                  { title: "LangSmith observability", desc: "First-class tracing, testing, and evaluation tooling integrated directly with LangChain applications." },
                ].map((f) => (
                  <div key={f.title} className="bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Core concepts</h2>
              <div className="space-y-3">
                {[
                  { concept: "Chain", desc: "A sequence of calls—to LLMs, tools, or other chains—where output from one step feeds into the next." },
                  { concept: "Agent", desc: "An LLM that decides which tools to use and in what order to accomplish a goal. Uses a reasoning loop (often ReAct or Tool Calling)." },
                  { concept: "Tool", desc: "A function the agent can call: web search, code interpreter, database query, API call, calculator, etc." },
                  { concept: "Retriever", desc: "A component that fetches relevant documents from a vector store or other source for RAG pipelines." },
                  { concept: "Memory", desc: "Stores conversation history or intermediate state so the agent can refer back to earlier context." },
                  { concept: "Runnable", desc: "The base abstraction in LCEL. Any chain, prompt, or LLM is a Runnable—supports .invoke(), .stream(), .batch()." },
                ].map((item) => (
                  <div key={item.concept} className="flex gap-4 bg-slate-900 border border-white/5 rounded-xl p-4">
                    <code className="text-xs font-mono text-indigo-300 bg-indigo-600/10 px-2 py-0.5 rounded flex-shrink-0 h-fit mt-0.5">
                      {item.concept}
                    </code>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Code example: Multi-step research agent</h2>

              <div className="space-y-4">
                <div className="bg-slate-950 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">LangChain approach (Python)</p>
                  <pre className="text-xs text-slate-300 overflow-x-auto font-mono leading-relaxed">
{`from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.tools import DuckDuckGoSearchRun
from langgraph.graph import StateGraph, START, END
from typing import TypedDict

# Define shared state
class ResearchState(TypedDict):
    query: str
    search_results: str
    analysis: str
    report: str

# Step 1: Search with GPT-4o mini (cheap, fast)
search_tool = DuckDuckGoSearchRun()
search_llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def search_node(state: ResearchState) -> ResearchState:
    results = search_tool.run(state["query"])
    summary_prompt = ChatPromptTemplate.from_messages([
        ("human", "Summarize these search results: {results}")
    ])
    chain = summary_prompt | search_llm | StrOutputParser()
    state["search_results"] = chain.invoke({"results": results})
    return state

# Step 2: Analyze with Claude (strong reasoning)
analysis_llm = ChatAnthropic(model="claude-3-5-sonnet-20241022")

def analyze_node(state: ResearchState) -> ResearchState:
    prompt = ChatPromptTemplate.from_messages([
        ("human", "Analyze these findings: {results}\\nQuery: {query}")
    ])
    chain = prompt | analysis_llm | StrOutputParser()
    state["analysis"] = chain.invoke({
        "results": state["search_results"],
        "query": state["query"]
    })
    return state

# Step 3: Write report with GPT-4o (best writing)
report_llm = ChatOpenAI(model="gpt-4o", temperature=0.3)

def report_node(state: ResearchState) -> ResearchState:
    prompt = ChatPromptTemplate.from_messages([
        ("human", "Write a professional report based on: {analysis}")
    ])
    chain = prompt | report_llm | StrOutputParser()
    state["report"] = chain.invoke({"analysis": state["analysis"]})
    return state

# Build the graph
graph = StateGraph(ResearchState)
graph.add_node("search", search_node)
graph.add_node("analyze", analyze_node)
graph.add_node("report", report_node)
graph.add_edge(START, "search")
graph.add_edge("search", "analyze")
graph.add_edge("analyze", "report")
graph.add_edge("report", END)

app = graph.compile()
result = app.invoke({"query": "AI agent orchestration trends 2026"})
print(result["report"])`}
                  </pre>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-5">
                  <p className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">AiOrchestration equivalent</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The same 3-step workflow above takes about 60 seconds to build in AiOrchestration: drag in a Search node, an Analyze node (select Claude 3.5), and a Report node (select GPT-4o). Connect them, configure the prompts in the UI, hit Save. No Python, no graph setup, no deployment—it runs instantly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">LangChain vs AiOrchestration: when to use which</h2>
              <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium">Scenario</th>
                      <th className="text-center px-4 py-3 text-slate-400 font-medium">LangChain</th>
                      <th className="text-center px-4 py-3 text-indigo-400 font-medium">AiOrchestration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { s: "Rapid workflow prototyping", lc: false, aio: true },
                      { s: "Custom Python logic in steps", lc: true, aio: false },
                      { s: "Non-technical team builds workflows", lc: false, aio: true },
                      { s: "Complex custom RAG pipeline", lc: true, aio: "Partial" },
                      { s: "Real-time cost monitoring UI", lc: false, aio: true },
                      { s: "Team collaboration on workflows", lc: false, aio: true },
                      { s: "Self-hosted on your infrastructure", lc: true, aio: false },
                      { s: "8 practical business templates", lc: false, aio: true },
                      { s: "Zero infrastructure management", lc: false, aio: true },
                    ].map((row) => (
                      <tr key={row.s}>
                        <td className="px-5 py-3 text-slate-300">{row.s}</td>
                        <td className="px-4 py-3 text-center">
                          {row.lc === true ? (
                            <svg className="w-4 h-4 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {row.aio === true ? (
                            <svg className="w-4 h-4 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : row.aio === "Partial" ? (
                            <span className="text-xs text-yellow-400">Partial</span>
                          ) : (
                            <svg className="w-4 h-4 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">LangChain limitations to know</h2>
              <div className="space-y-3">
                {[
                  "Frequent breaking changes between minor versions make upgrades painful in production",
                  "No built-in UI for visualization, monitoring, or team collaboration",
                  "Abstractions can hide important details, making debugging complex",
                  "Requires managing your own infrastructure, scaling, and reliability",
                  "Real-time cost visibility requires separate tooling (LangSmith is paid at scale)",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Want the power of LangChain without the code?</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              AiOrchestration implements the same patterns—chains, agents, tools, conditionals—in a drag-and-drop canvas.
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
