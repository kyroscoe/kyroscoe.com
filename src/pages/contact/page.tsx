import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { business } from '../home/components/siteData';
import { PageShell, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';
import { submitContact } from '../../utils/contact';

const serviceOptions = ['IT support', 'Cybersecurity', 'vCISO services', 'Website build or support', 'Tools or automation', 'Support plan', 'Not sure yet'];

export default function ContactPage() {
  usePageSEO('/contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const sending = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    const form = event.currentTarget;
    setStatus('sending');
    try {
      await submitContact(new FormData(form));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  }
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}>
    <section className="section"><div className="container contact-grid">
      <div className="contact-info">
        <SectionIntro level={1} eyebrow="Contact" title="Tell us what you need." text="Describe the issue or project. We’ll respond within 24 hours with next steps." />
        <dl className="contact-details">
          <div><dt>Email</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
          <div><dt>Phone</dt><dd><a href={business.phoneHref}>{business.phone}</a></dd></div>
          <div><dt>Service area</dt><dd>{business.serviceArea}</dd></div>
        </dl>
        <p className="emergency-note"><strong>Urgent issue?</strong> Call us to discuss emergency support availability. The inquiry response time is not an emergency service guarantee.</p>
      </div>
      <div className="panel">
        <form name="contact" method="POST" className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Leave this field empty<input name="bot-field" autoComplete="off" tabIndex={-1} /></label></p>
          <div className="form-row">
            <label className="field">Name<input name="name" autoComplete="name" required maxLength={120} /></label>
            <label className="field">Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          </div>
          <label className="field"><span>Business name <small>(optional)</small></span><input name="business" autoComplete="organization" maxLength={200} /></label>
          <label className="field">What do you need help with?
            <select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select>
          </label>
          <label className="field">How can we help?<textarea name="details" rows={5} required maxLength={5000} aria-describedby="details-help" /><small id="details-help">Include the problem, your location, and any relevant timing. Please don’t send passwords or sensitive records.</small></label>
          <p className="form-note">We use your information to respond to your inquiry. Read our <Link to="/privacy">Privacy Policy</Link>.</p>
          <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}<ArrowRight size={17} aria-hidden="true" /></button>
          {status === 'sent' && <div ref={feedback} tabIndex={-1} className="form-feedback" role="status">Thanks for reaching out. Your message was submitted. We’ll respond within 24 hours.</div>}
          {status === 'error' && <div ref={feedback} tabIndex={-1} className="form-feedback form-error" role="alert">We couldn’t confirm your message was sent. Please try again, email <a href={`mailto:${business.email}`}>{business.email}</a>, or call <a href={business.phoneHref}>{business.phone}</a>.</div>}
        </form>
      </div>
    </div></section>
  </main><Footer /></PageShell>;
}
