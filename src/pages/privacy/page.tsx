import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { usePageSEO } from '../../utils/usePageSEO';

export default function Privacy() {
  usePageSEO({
    title: 'Privacy Policy | Kyroscoe',
    description: 'Read the Kyroscoe privacy policy for information on data collection, security, retention, and your privacy rights.',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-teal-600 transition-colors hover:text-teal-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900">Privacy Policy</h1>

          <div className="mb-8 text-gray-600">
            <p className="font-semibold">Kyroscoe, LLC</p>
            <p>Last Updated: 11/24/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Introduction</h2>
              <p className="leading-relaxed text-gray-700">
                Kyroscoe, LLC ("Kyroscoe," "we," "our," or "us") is committed to protecting your privacy. This policy explains what information we collect, how we use it, how we protect it, and your rights regarding your personal data. By using our website or services, you agree to the practices described here.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">Information You Provide to Us</h3>
              <p className="mb-3 leading-relaxed text-gray-700">
                We may collect the following information when you contact us, request support, or sign up for services:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information (if applicable)</li>
                <li>Details you provide during IT support, cybersecurity guidance, website projects, custom tool work, or consultations</li>
                <li>Any files or diagnostic information you voluntarily share for troubleshooting</li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">Payment Information</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>All payment processing is handled by Stripe.</li>
                <li>We do not store or have access to your full credit card number. Stripe manages all billing data securely in accordance with PCI-DSS standards.</li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">Automatically Collected Data</h3>
              <p className="mb-3 leading-relaxed text-gray-700">
                When you visit our website, our systems or hosting provider may automatically collect:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Date/time of access</li>
                <li>Cookies or similar tracking technologies (for basic site functionality and analytics)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p className="mb-3 leading-relaxed text-gray-700">We use the information we collect to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Provide IT support, cybersecurity guidance, website work, consulting, and automation services</li>
                <li>Communicate with you about your requests</li>
                <li>Manage billing and invoicing</li>
                <li>Improve our website and services</li>
                <li>Maintain the security and integrity of our systems</li>
                <li>Comply with legal, accounting, or regulatory requirements</li>
              </ul>
              <p className="font-semibold text-gray-900">We do not sell your personal information. Ever.</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">4. How We Share Information</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                We may share information only when necessary to provide our services or operate our business. This includes:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Stripe (payment processing)</li>
                <li>Google Workspace (email, documents, forms)</li>
                <li>Web hosting providers (for site functionality)</li>
                <li>Scheduling or communication tools (if you use them to contact us)</li>
                <li>Analytics providers (if enabled)</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                We only share the minimum data required and never for advertising or resale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Data Security</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                We take security seriously. Kyroscoe uses industry-standard security measures to protect your information, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>HTTPS encryption for all data transmitted</li>
                <li>Secure account access</li>
                <li>Restricted internal data access</li>
                <li>Regular security monitoring</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Despite our efforts, no method of transmission or storage is 100% secure, but we work to safeguard your data to the best of our ability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Data Retention</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                We keep personal information only as long as necessary for:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Providing services</li>
                <li>Legal, tax, or accounting requirements</li>
                <li>Security or fraud-prevention purposes</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Billing and financial records are retained for at least 7 years, per U.S. law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Your Rights</h2>
              <p className="mb-3 leading-relaxed text-gray-700">You have the right to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Request a copy of the information we have about you</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your information (unless we must retain it for legal reasons)</li>
                <li>Opt out of non-essential communications</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                To exercise these rights, email <a href="mailto:support@kyroscoe.com" className="font-semibold text-teal-600 hover:text-teal-700">support@kyroscoe.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Children&apos;s Privacy</h2>
              <p className="leading-relaxed text-gray-700">
                Our services are not intended for children under 13, and we do not knowingly collect personal information from children. If we learn that a child has provided data, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Changes to This Policy</h2>
              <p className="leading-relaxed text-gray-700">
                We may update this Privacy Policy periodically. The "Last Updated" date will always reflect the most recent revision. Continued use of our website or services after changes means you accept the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">10. How to Contact Us</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                If you have questions about this policy or your data, contact us:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="mb-2 font-semibold text-gray-900">Kyroscoe, LLC</p>
                <p className="mb-1 text-gray-700">
                  Email: <a href="mailto:support@kyroscoe.com" className="font-semibold text-teal-600 hover:text-teal-700">support@kyroscoe.com</a>
                </p>
                <p className="text-gray-700">
                  Website: <a href="https://kyroscoe.com" className="font-semibold text-teal-600 hover:text-teal-700">https://kyroscoe.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
