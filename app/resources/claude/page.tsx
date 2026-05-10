import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration with Claude (Anthropic) – Integration Guide",
  description:
    "How to use Anthropic's Claude as an AI agent node in orchestration workflows. Claude's strengths, tool use, extended context, code examples, and AiOrchestration integration.",
};

export default function ClaudePage() {
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
              AI Agent Orchestration with Claude
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Anthropic&apos;s Claude is one of the most capable AI models for agentic tasks—renowned for its reasoning depth, instruction-following accuracy, and nuanced long-context understanding. Here&apos;s how to use Claude effectively in multi-agent orchestration workflows.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Claude excels in orchestration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Superior instruction following",
                    desc: "Claude reliably follows complex, multi-part instructions without hallucinating constraints. Critical for orchestration steps where precise output format matters.",
                  },
                  {
                    title: "200K token context window",
                    desc: "Claude 3.5 supports up to 200,000 tokens of context. Ideal for processing large documents, codebases, or long conversation histories in a single step.",
                  },
                  {
                    title: "Native tool use (function calling)",
                    desc: "Claude supports parallel tool use—calling multiple tools simultaneously—making it exceptionally efficient as an agent orchestrator node.",
                  },
                  {
                    title: "Low hallucination on factual tasks",
                    desc: "Claude is more likely to say &apos;I don&apos;t know&apos; than fabricate, making it safer for high-stakes workflows in finance, legal, and healthcare contexts.",
                  },
                  {
                    title: "Strong code generation",
                    desc: "Claude 3.5 Sonnet consistently tops coding benchmarks. Use it for code generation, code review, SQL writing, and data transformation steps.",
                  },
                  {
                    title: "Constitutional AI training",
                    desc: "Anthropic&apos;s Constitutional AI approach makes Claude more reliable for sensitive content moderation and safety-critical agent steps.",
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
              <h2 className="text-2xl font-bold text-white mb-4">Claude model selection guide</h2>
              <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium">Model</th>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium hidden md:table-cell">Speed</th>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium hidden md:table-cell">Cost</th>
                      <th className="text-left px-5 py-3 text-slate-400 font-medium">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { model: "Claude 3.5 Sonnet", speed: "Fast", cost: "Medium", use: "Complex reasoning, code, analysis, writing" },
                      { model: "Claude 3 Haiku", speed: "Very fast", cost: "Low", use: "Classification, extraction, routing, high-volume steps" },
                      { model: "Claude 3 Opus", speed: "Slow", cost: "High", use: "Most complex tasks requiring maximum reasoning depth" },
                    ].map((row) => (
                      <tr key={row.model}>
                        <td className="px-5 py-3 text-white font-medium">{row.model}</td>
                        <td className="px-5 py-3 text-slate-400 hidden md:table-cell">{row.speed}</td>
                        <td className="px-5 py-3 text-slate-400 hidden md:table-cell">{row.cost}</td>
                        <td className="px-5 py-3 text-slate-400">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Code example: Claude with tool use</h2>
              <div className="bg-slate-950 border border-white/10 rounded-xl p-5 mb-4">
                <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">Direct Anthropic SDK (Python)</p>
                <pre className="text-xs text-slate-300 overflow-x-auto font-mono leading-relaxed">
{`import anthropic

client = anthropic.Anthropic()

# Define tools Claude can use
tools = [
    {
        "name": "search_knowledge_base",
        "description": "Search internal documentation and knowledge base",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"},
                "category": {"type": "string", "enum": ["technical", "billing", "general"]}
            },
            "required": ["query"]
        }
    },
    {
        "name": "get_customer_record",
        "description": "Retrieve customer account information by email",
        "input_schema": {
            "type": "object",
            "properties": {
                "email": {"type": "string"}
            },
            "required": ["email"]
        }
    }
]

def run_support_agent(customer_query: str, customer_email: str) -> str:
    messages = [
        {
            "role": "user",
            "content": f"Customer email: {customer_email}\\nQuery: {customer_query}"
        }
    ]

    while True:
        response = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=2048,
            system="You are a helpful customer support agent. Use the available tools to look up information before responding.",
            tools=tools,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            # Extract text response
            return next(b.text for b in response.content if b.type == "text")

        if response.stop_reason == "tool_use":
            # Process tool calls
            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    # In production: call actual tools here
                    result = {"found": True, "data": f"Mock result for {block.name}"}
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": str(result)
                    })

            # Add assistant response and tool results to messages
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})

result = run_support_agent(
    "My subscription charged twice this month",
    "user@example.com"
)
print(result)`}
                </pre>
              </div>

              <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-5">
                <p className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">Same workflow in AiOrchestration</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The above 60 lines of Python becomes a 4-node visual workflow: Trigger (email/webhook) &rarr; Claude node (with tool use enabled, knowledge base + CRM tools connected in UI) &rarr; Routing node (escalate if confidence &lt; 0.8) &rarr; Response node (send email). Total setup time: under 5 minutes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Best practices for Claude in agent workflows</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Use Claude 3 Haiku for routing and classification",
                    desc: "For high-volume steps like intent detection or document classification, Haiku is 10x cheaper and nearly as accurate as Sonnet. Reserve Sonnet for reasoning-heavy steps.",
                  },
                  {
                    title: "Leverage the extended context window strategically",
                    desc: "Claude&apos;s 200K context is ideal for legal document review, codebase analysis, or long conversation support—but filling the full context significantly increases latency. Use it when the task genuinely requires it.",
                  },
                  {
                    title: "Use structured output prompting",
                    desc: "Claude follows JSON output instructions reliably. Define your output schema in the system prompt and use it to extract structured data from unstructured inputs in pipeline steps.",
                  },
                  {
                    title: "Enable parallel tool calls for efficiency",
                    desc: "When an agent step needs to gather data from multiple sources, enable parallel tool use so Claude calls all tools simultaneously instead of sequentially—often 3–5x faster.",
                  },
                  {
                    title: "Set explicit personas for specialized nodes",
                    desc: "Claude responds well to specific role framing. A security-review node that starts with &apos;You are a senior application security engineer...&apos; consistently outperforms generic prompts.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Claude in AiOrchestration</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                AiOrchestration has first-class Claude integration. In the workflow canvas, you can:
              </p>
              <ul className="space-y-2 text-slate-400">
                {[
                  "Select any Claude model (Haiku, Sonnet, Opus) per node independently",
                  "Configure system prompts, temperature, and max tokens in the UI",
                  "Enable tool use and connect to your data sources visually",
                  "View token usage and cost per Claude call in the real-time dashboard",
                  "Chain Claude steps with GPT-4o steps in the same workflow",
                  "Set fallbacks: if Claude fails, automatically retry with GPT-4o",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Add Claude to your first workflow</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              AiOrchestration makes it easy to use Claude—and any other model—in production orchestration workflows without writing a line of code.
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
