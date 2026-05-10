import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import HeroSection from "@/components/HeroSection";

const features = [
  {
    title: "Drag-and-drop Canvas",
    description:
      "Build complex AI pipelines visually. Connect nodes with a click, rearrange steps intuitively, and see your entire workflow at a glance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Multi-model Support",
    description:
      "Natively integrate GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Mistral, and more. Use the right model for each task in the same workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Pre-built Templates",
    description:
      "Launch in minutes with 50+ battle-tested workflow templates for email triage, content creation, code review, customer support, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Conditional Logic",
    description:
      "Branch your workflows based on AI output, custom rules, or external data. Handle errors gracefully with built-in fallback paths.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Real-time Cost Dashboard",
    description:
      "Track token usage and API spend across all models in real time. Set budget alerts and optimize your most expensive workflow steps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Share workflows with teammates, manage permissions, leave comments on nodes, and ship AI automations as a team—not in silos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "AiOrchestration cut our content production pipeline from 4 hours to 12 minutes. We went from one blog post per day to eight—with the same team.",
    name: "Sarah Chen",
    role: "Head of Content",
    company: "Marketly",
  },
  {
    quote:
      "We replaced three separate Python scripts with a single visual workflow. Our engineering team now spends time on features, not glue code.",
    name: "Marcus Webb",
    role: "CTO",
    company: "Dataflow Systems",
  },
  {
    quote:
      "The cost dashboard alone paid for our subscription in the first month. We were wasting 40% of our AI budget on redundant calls we didn't know about.",
    name: "Priya Nair",
    role: "AI Product Manager",
    company: "Scaleup AI",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Features */}
        <section id="features" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything you need to automate with AI
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                A complete platform to design, run, and monitor multi-agent workflows at any scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 mb-5 group-hover:bg-indigo-600/30 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* Testimonials */}
        <section className="py-20 md:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by builders worldwide
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                See how teams are shipping more with AiOrchestration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600/30 to-purple-600/20 border border-indigo-500/30 p-12 md:p-16">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to automate your first workflow?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Join 500+ teams already saving hours every day with visual AI agent orchestration.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
              >
                Get started for free &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
