import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Streamverse',
  description:
    'Learn how Streamverse collects, uses, and protects your information. Read our privacy practices, cookies usage, and your rights.',
  alternates: {
    canonical: 'https://streamversetv.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-section-dark text-gray-200">
      <section className="container mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-400">Last updated: {new Date().toISOString().split('T')[0]}</p>

        <div className="mt-8 space-y-8 leading-relaxed">
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website and use our services (collectively, the “Services”). By using the Services, you
            agree to the collection and use of information in accordance with this policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Personal Information:</span> name, email address, billing details (processed
                by our payment provider), and any information you submit via forms.
              </li>
              <li>
                <span className="font-medium">Usage Data:</span> pages visited, referring URLs, device and browser
                information, approximate location, and interactions with the site.
              </li>
              <li>
                <span className="font-medium">Cookies & Similar Technologies:</span> used for authentication, preferences,
                analytics, and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Services.</li>
              <li>Process payments and manage subscriptions or orders.</li>
              <li>Improve performance, reliability, and user experience.</li>
              <li>Communicate with you about updates, support, promotions, and important notices.</li>
              <li>Detect, prevent, and address technical or security issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Sharing of Information</h2>
            <p className="mt-3">
              We may share information with trusted vendors that help us operate our Services (e.g., analytics,
              payment processing, hosting). These parties are bound by confidentiality obligations and may not
              use your information for any other purpose. We may also disclose information if required by law or
              to protect our rights, users, or the public.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Data Retention</h2>
            <p className="mt-3">
              We retain personal information only as long as necessary for the purposes outlined in this policy,
              unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Your Choices & Rights</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You can update or correct your account information.</li>
              <li>You can manage cookie preferences via your browser settings.</li>
              <li>You may request access to, deletion of, or a copy of your personal data, subject to verification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures to protect your information. However,
              no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Children’s Privacy</h2>
            <p className="mt-3">
              Our Services are not directed to children under 13, and we do not knowingly collect personal
              information from children. If you believe a child provided us with personal information, please
              contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">International Transfers</h2>
            <p className="mt-3">
              If you access our Services from outside your country, your information may be transferred to and
              processed in countries other than your own. By using the Services, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will post the new policy on this page and
              update the “Last updated” date above. Your continued use of the Services after changes become
              effective means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p className="mt-3">
              Questions about this policy? Reach us via the <Link href="/help" className="text-blue-400 hover:text-blue-300">Help</Link> page.
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
