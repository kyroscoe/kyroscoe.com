import { Link } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { business } from '../home/components/siteData';
import { PageShell, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function Terms() {
  usePageSEO('/terms');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1} className="section"><div className="container legal">
    <SectionIntro level={1} eyebrow="Kyroscoe, LLC" title="Terms of Service" />
    <p className="updated">Updated October 16, 2026</p>
    <section><h2>Working with Kyroscoe</h2><p>We provide IT support, cybersecurity and virtual CISO services, website services, and custom tools and automation. Sending an inquiry does not create a service agreement. We confirm the scope and terms of an engagement before work begins.</p></section>
    <section><h2>Scope, fees, and support plans</h2><p>Your written proposal or service agreement sets the deliverables, pricing, payment schedule, support availability, renewal and cancellation terms, and any refund provisions. If these website terms conflict with an agreement for your engagement, that agreement controls.</p></section>
    <section><h2>Response and availability</h2><p>We respond to inquiries within 24 hours. This is an initial response commitment, not a guarantee of resolution or around-the-clock support. Emergency support is available subject to capacity and the terms agreed for the work. Call <a href={business.phoneHref}>{business.phone}</a> to discuss an urgent issue.</p></section>
    <section><h2>Your responsibilities</h2><p>Provide accurate information, appropriate authorization, and access needed for the agreed work. Keep appropriate backups and do not share passwords or sensitive records through the public contact form. Services must be used lawfully.</p></section>
    <section><h2>Third-party systems and project ownership</h2><p>Third-party products remain subject to their providers’ terms and availability. We cannot guarantee uninterrupted operation, perfect security, or indefinite compatibility. Ownership, licensing, handover, and ongoing maintenance of project work are defined in your written agreement.</p></section>
    <section><h2>Privacy and contact</h2><p>Our <Link to="/privacy">Privacy Policy</Link> explains how we handle website inquiries. For questions about services or these terms, email <a href={`mailto:${business.email}`}>{business.email}</a>.</p></section>
    <section><h2>Changes</h2><p>We may update this page as our services change. Changes to an existing engagement follow the terms of that engagement’s agreement.</p></section>
  </div></main><Footer /></PageShell>;
}
