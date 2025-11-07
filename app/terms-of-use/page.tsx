import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Streamverse',
  description:
    'Read Streamverse Terms of Use: acceptable use, accounts, intellectual property, disclaimers, and limitations of liability.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-section-dark text-gray-200">
      <section className="container mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Use</h1>
        <p className="mt-3 text-sm text-gray-400">Last updated: {new Date().toISOString().split('T')[0]}</p>

        <div className="mt-8 space-y-8 leading-relaxed">
          <p>
            These Terms of Use (the “Terms”) govern your access to and use of our website and services
            (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these
            Terms. If you do not agree to these Terms, do not use the Services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white">1. Eligibility & Accounts</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You must be at least the age of majority in your jurisdiction to use the Services.</li>
              <li>
                If you create an account, you are responsible for maintaining the confidentiality of your
                credentials and for all activities that occur under your account.
              </li>
              <li>Provide accurate information and keep it updated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Acceptable Use</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Do not use the Services for unlawful, infringing, or harmful purposes.</li>
              <li>No attempts to access accounts, systems, or networks without authorization.</li>
              <li>No reverse engineering, scraping, or automated extraction except as permitted by law.</li>
              <li>Respect intellectual property and the rights of others at all times.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Purchases, Subscriptions, and Refunds</h2>
            <p className="mt-3">
              If purchases or subscriptions are offered, they may be processed by third-party payment providers
              subject to their terms and privacy policies. Any refund or cancellation policies will be displayed
              at checkout or in your account settings where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Intellectual Property</h2>
            <p className="mt-3">
              The Services, including all content, features, and functionality, are owned by us or our licensors
              and are protected by intellectual property laws. You may not copy, modify, or create derivative
              works without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Third‑Party Services</h2>
            <p className="mt-3">
              The Services may contain links to third‑party websites or services. We do not control and are not
              responsible for the content or practices of any third parties. Your use of third‑party services is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Disclaimers</h2>
            <p className="mt-3">
              The Services are provided on an “as is” and “as available” basis without warranties of any kind,
              whether express or implied. To the fullest extent permitted by law, we disclaim all warranties,
              including merchantability, fitness for a particular purpose, and non‑infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, in no event will we be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting
              from your use of or inability to use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Changes to the Services and Terms</h2>
            <p className="mt-3">
              We may update the Services and these Terms from time to time. Changes take effect when posted. Your
              continued use of the Services after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws applicable in the jurisdiction where our company is
              established, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Contact</h2>
            <p className="mt-3">
              Questions about these Terms? Reach us via the <Link href="/help" className="text-blue-400 hover:text-blue-300">Help</Link> page.
            </p>
          </section>

          <p className="mt-8 text-xs text-gray-400">
            This page is provided for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
