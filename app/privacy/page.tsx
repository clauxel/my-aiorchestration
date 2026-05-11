import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AiOrchestration Privacy Policy – how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: May 11, 2026</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p className="text-slate-400 leading-relaxed">
                AiOrchestration (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website aiorchestration.space and the AiOrchestration platform (collectively, the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. By accessing or using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="text-slate-400 leading-relaxed mb-3">We collect the following categories of information:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><span><strong className="text-slate-300">Account Information:</strong> Name, email address, company name, and password when you register for an account.</span></li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><span><strong className="text-slate-300">Payment Information:</strong> Billing address, payment method details (processed via our payment provider; we do not store full card numbers).</span></li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><span><strong className="text-slate-300">Usage Data:</strong> Workflow configurations, agent execution logs, API call metadata, feature usage patterns, error reports, and performance metrics.</span></li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><span><strong className="text-slate-300">Technical Data:</strong> IP address, browser type, operating system, referring URLs, device identifiers, and cookies.</span></li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><span><strong className="text-slate-300">Communications:</strong> Emails, support tickets, and feedback you send to us.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-400 leading-relaxed mb-3">We use collected information for the following purposes:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To provide, operate, and maintain the Service</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To process payments and manage your subscription</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To communicate with you about updates, security alerts, and support</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To analyze usage patterns and improve the Service</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To detect, prevent, and address fraud or abuse</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>To comply with legal obligations</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                <strong className="text-slate-300">License to Usage Data:</strong> By using the Service, you grant AiOrchestration a worldwide, irrevocable, royalty-free license to use, process, and analyze aggregated and anonymized usage data derived from your use of the Service for the purpose of improving, developing, and operating the Service and related products. This license survives termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-slate-400 leading-relaxed mb-3">For users in the European Economic Area, we process personal data under the following legal bases:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Contract Performance:</strong> Processing necessary to provide the Service you subscribed to.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Legitimate Interest:</strong> Analytics, security monitoring, fraud prevention, and service improvement.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Consent:</strong> Marketing communications (you may withdraw consent at any time).</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Legal Obligation:</strong> Compliance with applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing and Disclosure</h2>
              <p className="text-slate-400 leading-relaxed mb-3">We do not sell your personal data. We may share data with:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Service Providers:</strong> Payment processors, cloud infrastructure providers, analytics services, and customer support tools, each bound by confidentiality agreements.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
              <p className="text-slate-400 leading-relaxed">
                We retain your account information for as long as your account is active. Execution logs and workflow data are retained according to your plan (1 day on Free, 7 days on Starter, 30 days on Pro, 90 days on Team). After account deletion, we retain anonymized aggregate data indefinitely. We may retain records for longer periods where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
              <p className="text-slate-400 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Correction:</strong> Request correction of inaccurate personal data.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Portability:</strong> Request export of your data in a machine-readable format.</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span><strong className="text-slate-300">Opt-out (CCPA):</strong> California residents may opt out of the sale of personal information. We do not sell personal data.</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">To exercise these rights, contact us at support@aigeamy.com.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Cookies and Tracking</h2>
              <p className="text-slate-400 leading-relaxed">
                We use essential cookies for session management and authentication, analytics cookies to understand usage patterns (Google Analytics), and optional marketing cookies. You may disable non-essential cookies through your browser settings. Note that disabling cookies may affect Service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Security</h2>
              <p className="text-slate-400 leading-relaxed">
                We implement industry-standard security measures including TLS 1.3 encryption in transit, AES-256 encryption at rest, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Dispute Resolution and Limitation of Liability</h2>
              <p className="text-slate-400 leading-relaxed">
                Any disputes arising out of or relating to this Privacy Policy shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association, seated in Delaware, USA. You waive any right to participate in class action proceedings. Our total liability for any privacy-related claim is limited to the amounts paid by you to AiOrchestration in the three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Children&apos;s Privacy</h2>
              <p className="text-slate-400 leading-relaxed">
                The Service is not directed to individuals under 16 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided personal data, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes by email or prominent notice on the Service at least 7 days before the change takes effect. Your continued use of the Service after the effective date constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Governing Law</h2>
              <p className="text-slate-400 leading-relaxed">
                This Privacy Policy is governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Contact Us</h2>
              <p className="text-slate-400 leading-relaxed">
                For privacy-related inquiries or to exercise your rights, contact us at:{" "}
                <a href="mailto:support@aigeamy.com" className="text-indigo-400 hover:text-indigo-300">
                  support@aigeamy.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
