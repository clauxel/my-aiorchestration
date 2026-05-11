import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiorchestration.space"),
  title: {
    template: "%s | AiOrchestration",
    default: "AiOrchestration – Visual AI Agent Orchestration Platform",
  },
  description:
    "Orchestrate GPT-4o, Claude, and Gemini into powerful automated workflows with a drag-and-drop visual canvas. No code required. Join 500+ teams automating with AI agents.",
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
    title: "AiOrchestration – Visual AI Agent Orchestration Platform",
    description:
      "Connect GPT-4o, Claude & Gemini into powerful automated workflows. Drag-and-drop canvas, no code required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiOrchestration Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiOrchestration – Visual AI Agent Orchestration Platform",
    description:
      "Connect GPT-4o, Claude & Gemini into powerful automated workflows. No code required.",
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
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-AIORCHESTRATION"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-AIORCHESTRATION');
          `}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#0a0a1a", color: "#e2e8f0" }}
      >
        {children}
      </body>
    </html>
  );
}
