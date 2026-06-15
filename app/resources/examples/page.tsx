import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Orchestration Examples – 8 Real-World Workflows",
  description:
    "Explore 8 production-ready AI agent orchestration examples: email triage, customer support, data analysis, content generation, code review, market research, HR screening, financial reporting.",
};

const examples = [
  {
    title: "Email Triage & Routing",
    industry: "Operations",
    complexity: "Beginner",
    timeSaved: "2–4 hrs/day",
    description:
      "Automatically classify incoming emails by urgency and category, extract key information, draft replies for routine messages, and route complex issues to the right team member—all within seconds of receiving the email.",
    steps: [
      "Trigger: new email received via Gmail/Outlook webhook",
      "Classify: GPT-4o mini categorizes urgency (high/medium/low) and type (support/sales/billing/other)",
      "Extract: Claude pulls key entities—sender, company, issue summary, request",
      "Decision: branch on urgency level",
      "High urgency: alert Slack channel with summary + forward to senior team",
      "Routine: generate draft reply using GPT-4o and move to Drafts folder",
      "Log: write structured record to CRM (HubSpot/Salesforce via API)",
    ],
    models: ["GPT-4o mini", "Claude 3.5 Sonnet", "GPT-4o"],
    roi: "One engineer&apos;s email handling time reduced from 3 hours to 20 minutes daily.",
  },
  {
    title: "AI Customer Support Agent",
    industry: "SaaS / E-commerce",
    complexity: "Intermediate",
    timeSaved: "60–80% ticket deflection",
    description:
      "A multi-step support agent that retrieves relevant documentation, checks order/account status, answers questions, escalates complex cases, and learns from resolutions over time.",
    steps: [
      "Trigger: new support ticket submitted",
      "Intent detection: classify as billing, technical, general, or escalation-required",
      "Context retrieval: semantic search across help docs, FAQ, past tickets (RAG)",
      "Account lookup: query database for customer subscription, usage, history",
      "Response generation: Claude 3.5 synthesizes docs + context into a response",
      "Confidence check: if score < 0.8, route to human agent with full context",
      "Resolution logging: update ticket with category, resolution, and satisfaction score",
    ],
    models: ["GPT-4o mini (intent)", "Claude 3.5 Sonnet (response)", "text-embedding-3-small"],
    roi: "Average first-response time: 8 seconds. Human escalation rate: 18%.",
  },
  {
    title: "Automated Data Analysis Report",
    industry: "Finance / Analytics",
    complexity: "Intermediate",
    timeSaved: "6–8 hrs/week",
    description:
      "Schedule a weekly workflow that pulls data from your data warehouse, runs statistical analysis, generates narrative insights, creates visualizations, and delivers a formatted report to stakeholders.",
    steps: [
      "Trigger: cron schedule (every Monday 7am)",
      "Data fetch: query BigQuery / Snowflake for key metrics",
      "Statistical analysis: Python node calculates week-over-week changes, anomalies",
      "Narrative generation: GPT-4o writes plain-English summary of data story",
      "Visualization: generate charts via Python/matplotlib and encode as base64",
      "Report compilation: Claude assembles sections into a structured report",
      "Distribution: send formatted HTML email via SendGrid, post to Notion/Confluence",
    ],
    models: ["GPT-4o (narrative)", "Claude 3.5 Sonnet (compilation)"],
    roi: "Weekly analytics report produced in 4 minutes instead of 7 hours.",
  },
  {
    title: "Content Generation Pipeline",
    industry: "Marketing / Media",
    complexity: "Beginner",
    timeSaved: "5–8 hrs/post",
    description:
      "From a single topic input, generate a complete content package: SEO-optimized blog post, LinkedIn article variant, Twitter/X thread, email newsletter, and meta descriptions—all in one automated run.",
    steps: [
      "Input: content brief (topic, audience, keywords, tone)",
      "Research: web search for current data, statistics, competitor content",
      "Outline: Claude 3.5 creates structured content plan",
      "Long-form: GPT-4o writes full 2,000-word blog post from outline",
      "SEO optimization: extract keywords, optimize headers, generate meta description",
      "Social repurposing: GPT-4o mini creates LinkedIn post and Twitter thread",
      "Email variant: Claude writes newsletter version with different CTA",
      "Output: all content saved to Notion/CMS with status set to &apos;Review&apos;",
    ],
    models: ["Claude 3.5 Sonnet", "GPT-4o", "GPT-4o mini"],
    roi: "Content team produces 8 posts/day instead of 1, with the same headcount.",
  },
  {
    title: "Automated Code Review",
    industry: "Engineering",
    complexity: "Advanced",
    timeSaved: "1–2 hrs/PR",
    description:
      "Trigger on new pull requests to automatically review code quality, security vulnerabilities, test coverage, documentation, and adherence to team standards—posting structured feedback within minutes.",
    steps: [
      "Trigger: GitHub/GitLab webhook on new pull request",
      "Diff extraction: fetch changed files and parse the diff",
      "Security scan: Claude analyzes for OWASP top 10 vulnerabilities",
      "Code quality: GPT-4o reviews logic, complexity, naming, patterns",
      "Test coverage: check if changed functions have corresponding tests",
      "Docs check: verify public methods have docstrings/JSDoc",
      "Standards check: compare against team&apos;s coding guidelines (stored as docs)",
      "Report: post structured PR comment with findings by category and severity",
    ],
    models: ["Claude 3.5 Sonnet (security)", "GPT-4o (quality)"],
    roi: "Security issues caught before merge increased 4x. PR review time cut by 65%.",
  },
  {
    title: "Competitive Market Research",
    industry: "Strategy / Product",
    complexity: "Intermediate",
    timeSaved: "8–12 hrs/report",
    description:
      "Automated competitive intelligence: monitor competitor websites, pricing pages, job postings, and news. Generate a weekly briefing on competitor moves, market trends, and strategic implications.",
    steps: [
      "Trigger: weekly schedule",
      "Web scraping: fetch competitor pricing pages, feature announcements",
      "News aggregation: search for competitor news, funding rounds, product launches",
      "Job postings: scrape competitor job boards to infer product direction",
      "Signal extraction: Claude identifies key changes and strategic signals",
      "Trend analysis: GPT-4o synthesizes patterns across all competitor data",
      "Briefing generation: structured report with executive summary and action items",
      "Distribution: email to leadership + Notion page with historical tracking",
    ],
    models: ["GPT-4o mini (extraction)", "Claude 3.5 Sonnet (synthesis)", "GPT-4o (narrative)"],
    roi: "Product team stays informed about 12 competitors with zero manual research effort.",
  },
  {
    title: "HR Resume Screening",
    industry: "Human Resources",
    complexity: "Beginner",
    timeSaved: "4–6 hrs/100 applicants",
    description:
      "Automatically screen incoming job applications: parse resumes, score candidates against job requirements, flag top applicants, generate interview questions, and send personalized acknowledgments.",
    steps: [
      "Trigger: new application submitted (email attachment or ATS webhook)",
      "Resume parsing: extract structured data—skills, experience, education, projects",
      "Job match scoring: compare candidate profile against job requirements (0–100)",
      "Threshold routing: score >= 80 → shortlist; 50–79 → review pool; < 50 → reject",
      "Interview prep: for shortlisted, GPT-4o generates tailored interview questions",
      "Bias check: Claude reviews the AI assessment for potential biases",
      "Acknowledgment: send personalized email (accepted/review/rejection) via SendGrid",
      "ATS update: write candidate status and AI notes to Workday/Greenhouse",
    ],
    models: ["Claude 3.5 Sonnet (parsing + bias)", "GPT-4o (scoring + questions)", "GPT-4o mini (emails)"],
    roi: "Time-to-shortlist reduced from 5 days to 2 hours. Hiring manager reviews 80% fewer unqualified candidates.",
  },
  {
    title: "Financial Reporting Automation",
    industry: "Finance / Accounting",
    complexity: "Advanced",
    timeSaved: "15–20 hrs/month",
    description:
      "Month-end financial reporting: pull data from accounting systems, reconcile discrepancies, generate P&L narrative, flag anomalies, produce board-ready reports, and create audit trails—all automated.",
    steps: [
      "Trigger: first business day of month (cron)",
      "Data extraction: pull from QuickBooks/Xero/NetSuite via API",
      "Reconciliation: Python node checks for discrepancies across accounts",
      "Anomaly detection: GPT-4o analyzes variances vs. budget and prior periods",
      "Narrative generation: Claude writes plain-English P&L commentary",
      "Chart generation: Python creates revenue, expense, and cashflow visualizations",
      "Board deck assembly: compile sections into PDF via HTML-to-PDF service",
      "Distribution: send encrypted PDF to board members, CFO, and auditors",
      "Audit trail: log all data sources, model versions, and timestamp to audit DB",
    ],
    models: ["GPT-4o (anomaly detection)", "Claude 3.5 Sonnet (narrative)"],
    roi: "Finance team closes month-end reporting 3 days faster. Zero missed anomalies in 6 months.",
  },
];

const complexityColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

export default function ExamplesPage() {
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
              AI Agent Orchestration Examples
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              8 production-ready workflow examples showing exactly how teams use multi-agent orchestration to automate real business processes—complete with steps, model choices, and ROI data.
            </p>
          </div>

          <div className="space-y-8">
            {examples.map((ex, i) => (
              <div
                key={ex.title}
                className="bg-slate-900 border border-indigo-500/20 rounded-2xl overflow-hidden"
              >
                <div className="p-6 pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-slate-500 font-mono">#{i + 1}</span>
                        <span className="text-xs text-slate-500">{ex.industry}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white">{ex.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${complexityColors[ex.complexity]}`}>
                        {ex.complexity}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs bg-slate-800 text-slate-400 rounded-full border border-white/10">
                        Saves {ex.timeSaved}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{ex.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Workflow steps</p>
                      <ol className="space-y-1.5">
                        {ex.steps.map((step, j) => (
                          <li key={j} className="flex gap-2.5 text-xs text-slate-400">
                            <span className="text-indigo-400 flex-shrink-0 font-mono">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Models used</p>
                        <div className="flex flex-wrap gap-1.5">
                          {ex.models.map((m) => (
                            <span key={m} className="px-2 py-1 text-xs bg-indigo-600/15 text-indigo-300 rounded-lg border border-indigo-500/20">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-3">
                        <p className="text-xs font-semibold text-green-400 mb-1 uppercase tracking-wider">ROI</p>
                        <p className="text-xs text-slate-300 leading-relaxed">{ex.roi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Build any of these workflows in minutes</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-xl mx-auto">
              All 8 examples above are available as pre-built templates in AiOrchestration. Launch and customize in minutes.
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
