import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AiOrchestration Terms of Service – the legal agreement governing your use of our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: May 11, 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                By accessing or using the AiOrchestration platform and website at aiorchestration.space (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not access or use the Service. These Terms constitute a legally binding agreement between you and AiOrchestration (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
              <p className="text-slate-400 leading-relaxed">
                AiOrchestration provides a visual platform for building, deploying, and managing AI agent workflows. The Service enables users to connect multiple AI models (including GPT-4o, Claude, Gemini, and others) into automated pipelines using a drag-and-drop interface. Features include workflow templates, conditional logic, real-time cost monitoring, and team collaboration tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Account Registration</h2>
              <p className="text-slate-400 leading-relaxed">
                You must create an account to access paid features. You agree to provide accurate, current, and complete information and to keep your account credentials confidential. You are responsible for all activity that occurs under your account. You must be at least 18 years old to create an account. AiOrchestration reserves the right to refuse registration or cancel accounts at its sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
              <p className="text-slate-400 leading-relaxed mb-3">You agree to use the Service only for lawful purposes. You may not:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Use the Service to generate illegal, harmful, harassing, abusive, defamatory, or fraudulent content</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Attempt to gain unauthorized access to the Service, other accounts, or computer systems</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Resell, sublicense, or otherwise transfer your rights to use the Service without prior written consent</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Use the Service to send spam, conduct phishing attacks, or distribute malware</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Circumvent, disable, or interfere with security features of the Service</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Violate any applicable local, national, or international laws or regulations</li>
                <li className="flex gap-2"><span className="text-indigo-400 flex-shrink-0">&#8227;</span>Use the Service to violate the terms of service of any third-party AI model provider</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Payment Terms</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Paid subscriptions are billed in advance on a monthly or annual cycle. By subscribing, you authorize AiOrchestration to charge your payment method on a recurring basis until you cancel.
              </p>
              <p className="text-slate-400 leading-relaxed mb-3">
                <strong className="text-slate-300">No Refunds:</strong> All payments are non-refundable except as required by applicable law. No refunds or credits will be issued for partial months, unused execution credits, or unused features. If you cancel, you will retain access to the Service until the end of your current billing period.
              </p>
              <p className="text-slate-400 leading-relaxed mb-3">
                <strong className="text-slate-300">Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period. You may cancel auto-renewal at any time through your account settings. Cancellation takes effect at the end of the current billing period.
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Price Changes:</strong> We reserve the right to change subscription prices with 30 days written notice. Continued use after the effective date constitutes acceptance of the new price.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                The Service, including all software, algorithms, interfaces, designs, trademarks, and documentation, is owned exclusively by AiOrchestration and protected by copyright, trademark, patent, and other intellectual property laws. All rights not expressly granted herein are reserved by AiOrchestration.
              </p>
              <p className="text-slate-400 leading-relaxed mb-3">
                You retain ownership of the content you input into the Service (&ldquo;User Content&rdquo;). By using the Service, you grant AiOrchestration a worldwide, non-exclusive, royalty-free license to use, process, and transmit User Content solely to operate and provide the Service.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Any feedback, suggestions, or ideas you provide to AiOrchestration regarding the Service shall become the exclusive property of AiOrchestration without any obligation to compensate you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AIORCHESTRATION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, BUSINESS, GOODWILL, OR ANTICIPATED SAVINGS, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE, EVEN IF AIORCHESTRATION HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-slate-400 leading-relaxed">
                AIORCHESTRATION&apos;S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNTS YOU PAID TO AIORCHESTRATION IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM. IF YOU HAVE NOT MADE ANY PAYMENTS, AIORCHESTRATION&apos;S LIABILITY IS LIMITED TO USD $10.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Indemnification</h2>
              <p className="text-slate-400 leading-relaxed">
                You agree to indemnify, defend, and hold harmless AiOrchestration, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your violation of these Terms; (b) your User Content; (c) your use of the Service; (d) your violation of any third-party right, including any intellectual property right or privacy right; or (e) your violation of any applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimer of Warranties</h2>
              <p className="text-slate-400 leading-relaxed">
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. AIORCHESTRATION DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. YOU USE THE SERVICE AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Account Termination</h2>
              <p className="text-slate-400 leading-relaxed">
                AiOrchestration may suspend or terminate your account and access to the Service at any time, for any reason or no reason, with or without notice. Reasons for termination may include, but are not limited to, violation of these Terms, non-payment, or behavior deemed harmful to other users or the Service. Upon termination, your right to use the Service immediately ceases. AiOrchestration shall not be liable to you or any third party for any termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Dispute Resolution</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                <strong className="text-slate-300">Binding Arbitration:</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved exclusively by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration shall be conducted in Wilmington, Delaware, USA. The arbitrator&apos;s decision shall be final and binding.
              </p>
              <p className="text-slate-400 leading-relaxed mb-3">
                <strong className="text-slate-300">Class Action Waiver:</strong> YOU AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. YOU WAIVE YOUR RIGHT TO A JURY TRIAL.
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Changes to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                AiOrchestration reserves the right to modify these Terms at any time. We will provide at least 7 days&apos; notice of material changes via email or notice on the Service. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the new Terms. If you do not agree with the modified Terms, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Third-Party Services</h2>
              <p className="text-slate-400 leading-relaxed">
                The Service integrates with third-party AI providers (OpenAI, Anthropic, Google, etc.). Your use of those services is subject to their respective terms of service and privacy policies. AiOrchestration is not responsible for the availability, accuracy, or content of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Miscellaneous</h2>
              <p className="text-slate-400 leading-relaxed">
                These Terms constitute the entire agreement between you and AiOrchestration regarding the Service and supersede all prior agreements. If any provision is found unenforceable, the remaining provisions shall remain in full force. AiOrchestration&apos;s failure to enforce any right or provision shall not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">15. Contact</h2>
              <p className="text-slate-400 leading-relaxed">
                For questions about these Terms, contact us at:{" "}
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
