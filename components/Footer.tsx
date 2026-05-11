import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AiOrchestration
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs leading-relaxed">
              The visual AI agent orchestration platform for GPT-4o, Claude, Gemini, webhooks, Slack, email, and cost-aware execution.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/clauxel/my-aiorchestration"
                aria-label="GitHub"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="mailto:support@aigeamy.com"
                aria-label="Email support"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6.75A2.75 2.75 0 016.75 4h10.5A2.75 2.75 0 0120 6.75v10.5A2.75 2.75 0 0117.25 20H6.75A2.75 2.75 0 014 17.25V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 7l7 5 7-5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><Link href="/#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li><Link href="/resources/platform" className="text-sm text-slate-400 hover:text-white transition-colors">What is AI Orchestration?</Link></li>
              <li><Link href="/resources/github" className="text-sm text-slate-400 hover:text-white transition-colors">GitHub Repos</Link></li>
              <li><Link href="/resources/tools" className="text-sm text-slate-400 hover:text-white transition-colors">Tools Comparison</Link></li>
              <li><Link href="/resources/open-source" className="text-sm text-slate-400 hover:text-white transition-colors">Open Source Guide</Link></li>
              <li><Link href="/resources/jobs" className="text-sm text-slate-400 hover:text-white transition-colors">Jobs & Careers</Link></li>
              <li><Link href="/resources/langchain" className="text-sm text-slate-400 hover:text-white transition-colors">LangChain Guide</Link></li>
              <li><Link href="/resources/examples" className="text-sm text-slate-400 hover:text-white transition-colors">Examples</Link></li>
              <li><Link href="/resources/claude" className="text-sm text-slate-400 hover:text-white transition-colors">Claude Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:support@aigeamy.com" className="text-sm text-slate-400 hover:text-white transition-colors">Support</a></li>
              <li><Link href="/#features" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              Serving teams in United States, United Kingdom, Germany, France, Canada, Australia, India
            </p>
            <p className="text-xs text-slate-500">
              &copy; 2026 AiOrchestration. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
