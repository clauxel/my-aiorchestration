'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

const resourceLinks = [
  { href: "/resources/platform", label: "What is AI Orchestration?" },
  { href: "/resources/github", label: "GitHub Repos" },
  { href: "/resources/tools", label: "Tools Comparison" },
  { href: "/resources/open-source", label: "Open Source Guide" },
  { href: "/resources/jobs", label: "Jobs & Careers" },
  { href: "/resources/langchain", label: "LangChain Integration" },
  { href: "/resources/examples", label: "Examples & Use Cases" },
  { href: "/resources/claude", label: "Claude Integration" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Aiorchestration
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900 border border-indigo-500/20 rounded-xl shadow-xl shadow-black/50 overflow-hidden">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-indigo-600/20 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/resources/platform"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all"
            >
              Get Started Free
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/60 border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Pricing
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
              Resources
            </div>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg pl-6"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
