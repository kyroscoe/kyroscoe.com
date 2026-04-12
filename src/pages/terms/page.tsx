import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { usePageSEO } from '../../utils/usePageSEO';

export default function Terms() {
  usePageSEO({
    title: 'Terms of Service | Kyroscoe IT Solutions',
    description: 'Review the Kyroscoe terms of service covering billing, support availability, project terms, and legal responsibilities.',
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

          <h1 className="mb-4 text-4xl font-bold text-gray-900">Terms of Service</h1>

          <div className="mb-8 text-gray-600">
            <p className="font-semibold">Kyroscoe, LLC</p>
            <p>Last Updated: 11/24/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              <p className="leading-relaxed text-gray-700">
                By accessing or using the Kyroscoe, LLC website or any services provided by us ("Kyroscoe," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Services Provided</h2>
              <p className="mb-3 leading-relaxed text-gray-700">Kyroscoe offers:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>IT support and consulting</li>
                <li>Computer repair</li>
                <li>Cybersecurity guidance</li>
                <li>Web and software development</li>
                <li>Business automations</li>
                <li>Creator tools and custom solutions</li>
              </ul>
              <p className="leading-relaxed text-gray-700">Services may change or expand over time.</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Eligibility</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                You must be at least 18 years old to purchase or use our services. By using our site, you confirm you are legally allowed to enter into contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">4. User Responsibilities</h2>
              <p className="mb-3 leading-relaxed text-gray-700">When working with Kyroscoe, you agree to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Provide accurate information</li>
                <li>Use our services responsibly and lawfully</li>
                <li>Not misuse or attempt to exploit our systems, tools, or intellectual property</li>
                <li>Not engage in illegal, abusive, or harmful activity while using support services</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                If you abuse or violate these rules, we may suspend or terminate services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Payments &amp; Billing</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                All payments are processed through Stripe or any billing system Kyroscoe uses.
              </p>
              <p className="mb-3 leading-relaxed text-gray-700">You agree that:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Invoices must be paid by the due date</li>
                <li>Unpaid invoices may impact service availability</li>
                <li>Subscriptions will auto-renew unless canceled</li>
                <li>We do not store your full payment information (Stripe handles that)</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                If a payment fails, we may pause or restrict service until resolved.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Refund Policy</h2>
              <p className="mb-3 leading-relaxed text-gray-700">Unless otherwise stated in writing:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>All completed services, consultations, and development work are non-refundable</li>
                <li>Deposits for development or custom work are non-refundable</li>
                <li>Subscription fees already paid are non-refundable, but you may cancel future billing at any time</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                We do our best to ensure satisfaction, but custom technical work cannot be undone once delivered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Scheduling, Availability &amp; Support</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                Support is typically available:
                <br />
                <strong>Monday-Friday, 9 AM - 6 PM EST</strong>
                <br />
                After-hours or emergency support may incur additional costs unless covered by your plan.
              </p>
              <p className="leading-relaxed text-gray-700">
                Kyroscoe is not responsible for delays caused by incomplete information, third-party outages, hardware failures, or issues outside our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Communication</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                By contacting Kyroscoe or using our services, you agree we may communicate with you through:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Email</li>
                <li>Phone or text</li>
                <li>Support systems or portals</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                You can request to limit communication types at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Data Security &amp; Privacy</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                Your use of our services is also governed by our Privacy Policy, which explains:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>What data we collect</li>
                <li>How we use it</li>
                <li>How we protect it</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                We take reasonable measures to secure your data, but no system is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Third-Party Tools &amp; Integrations</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                Some services rely on third-party platforms such as:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Stripe</li>
                <li>Google Workspace</li>
                <li>Hosting providers</li>
                <li>API integrations</li>
                <li>Development frameworks</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                We are not responsible for outages, changes, or issues caused by those third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Intellectual Property</h2>
              <p className="mb-3 leading-relaxed text-gray-700">Unless explicitly transferred in writing:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>All custom code, tools, assets, and frameworks created by Kyroscoe remain Kyroscoe&apos;s intellectual property until paid in full</li>
                <li>Unauthorized copying, resale, or distribution of our work is prohibited</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                For software development projects, ownership terms are defined in the project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Limitation of Liability</h2>
              <p className="mb-3 leading-relaxed text-gray-700">To the fullest extent permitted by law:</p>
              <p className="mb-3 leading-relaxed text-gray-700">Kyroscoe, LLC is not liable for:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Data loss</li>
                <li>Business interruption</li>
                <li>Lost revenue</li>
                <li>Third-party failures</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Your maximum remedy for any claim is limited to the amount you paid us for the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">13. Disclaimer</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                We provide services "as is" and "as available." We cannot guarantee:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Uninterrupted service</li>
                <li>Error-free code</li>
                <li>Perfect security</li>
                <li>Indefinite compatibility or uptime</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Technology changes constantly; we do our best to keep things running smoothly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">14. Termination</h2>
              <p className="mb-3 leading-relaxed text-gray-700">We may suspend or terminate services if:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Payments are not made</li>
                <li>Terms are violated</li>
                <li>Abuse occurs</li>
                <li>Illegal activity is discovered</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                You may terminate at any time by notifying us in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">15. Changes to These Terms</h2>
              <p className="leading-relaxed text-gray-700">
                We may update these Terms of Service occasionally. The "Last Updated" date will reflect the latest version. Continued use of our website or services means you accept any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">16. Contact Information</h2>
              <p className="mb-3 leading-relaxed text-gray-700">For questions about these terms:</p>
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
