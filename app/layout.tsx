import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import "./globals.css";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AiOrchestration",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://aiorchestration.space",
    description:
      "AiOrchestration helps teams design, route, monitor, and price multi-model AI agent workflows with visual nodes, logs, and hosted checkout.",
    offers: [
      { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Pro", price: "99", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Team", price: "299", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does AiOrchestration do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AiOrchestration lets teams build visual AI agent workflows, combine GPT-4o, Claude, and Gemini nodes, branch decisions, send outputs, and monitor cost per run.",
        },
      },
      {
        "@type": "Question",
        name: "Who is AiOrchestration for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is for operations, support, sales, and product teams that need repeatable agent workflows with logs, ownership, and predictable execution cost.",
        },
      },
      {
        "@type": "Question",
        name: "How does checkout work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paid plans expose hosted checkout from the pricing section, with annual billing available for Starter, Pro, and Team.",
        },
      },
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://aiorchestration.space"),
  title: {
    template: "%s | AiOrchestration",
    default: "AiOrchestration - Visual AI Agent Orchestration Platform",
  },
  description:
    "Build reliable AI agent orchestration workflows with GPT-4o, Claude, and Gemini nodes, conditional branches, webhooks, Slack and email outputs, execution logs, and real-time cost tracking.",
  keywords: [
    "AI agent orchestration",
    "AI workflow automation",
    "multi-agent systems",
    "LangChain alternative",
    "no-code AI",
    "GPT-4o workflow",
    "Claude automation",
    "AI pipeline builder",
    "agent orchestration platform",
    "AI agents visual editor",
  ],
  openGraph: {
    type: "website",
    url: "https://aiorchestration.space",
    siteName: "AiOrchestration",
    title: "AiOrchestration - Visual AI Agent Orchestration Platform",
    description:
      "Drag, connect, and monitor GPT-4o, Claude, and Gemini agent workflows with cost visibility built in.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiOrchestration workflow canvas and cost dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiOrchestration - Visual AI Agent Orchestration Platform",
    description:
      "Drag, connect, and monitor GPT-4o, Claude, and Gemini agent workflows with cost visibility built in.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://aiorchestration.space",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "d1hdJfeFy2lAWHenZHzkKvPvCnTXbH1-2nECivy0Lpw",
    other: {
      "msvalidate.01": "94D388E2CA0B71EC5A04D17A6A46E444",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#0a0a1a", color: "#e2e8f0" }}
      >
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
