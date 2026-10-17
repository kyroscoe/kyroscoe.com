import { Link } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { business } from '../home/components/siteData';
import { PageShell, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function Privacy() {
  usePageSEO('/privacy');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1} className="section"><div className="container legal">
    <SectionIntro level={1} eyebrow="Kyroscoe, LLC" title="Privacy Policy" />
    <p className="updated">Updated October 16, 2026</p>
    <section><h2>Information you share</h2><p>When you contact us, we receive the details you provide, such as your name, email address, business name, and message. Please do not include passwords, payment card information, or sensitive records in the website form.</p></section>
    <section><h2>How we use it</h2><p>We use your information to respond to inquiries, discuss services, and manage our relationship with you. Information needed for a service engagement may also be covered by your project or support agreement.</p></section>
    <section><h2>Hosting and service providers</h2><p>This website is hosted on Netlify, which also processes contact-form submissions. Hosting infrastructure may process technical data such as IP addresses and request logs to operate the site and prevent abuse. Our email and business tools may process information needed to handle your inquiry or deliver services.</p><p>We do not sell inquiry information. We may share it with providers needed to operate our business, or where disclosure is required by law.</p></section>
    <section><h2>Cookies and links</h2><p>This version of the website does not include advertising pixels or analytics scripts. Links to other websites are subject to those websites’ privacy practices.</p></section>
    <section><h2>Retention and security</h2><p>We retain information as needed to handle inquiries, provide services, maintain business records, and meet applicable obligations. No method of online transmission or storage is completely secure.</p></section>
    <section><h2>Questions and requests</h2><p>Contact <a href={`mailto:${business.email}`}>{business.email}</a> to ask about information you have shared or request access, correction, or deletion. We will review your request subject to applicable requirements and any records we need to retain.</p></section>
    <section><h2>Changes</h2><p>We will update this page and its revision date when this policy changes. See our <Link to="/terms">Terms of Service</Link> for information about service engagements.</p></section>
  </div></main><Footer /></PageShell>;
}
