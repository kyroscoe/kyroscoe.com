import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return <section className="section contact-strip">
    <div className="container contact-strip-inner">
      <div><p className="eyebrow">Let’s talk</p><h2>What does your business need?</h2><p>Tell us what’s happening. We’ll respond within 24 hours.</p></div>
      <Link className="button" to="/contact">Get in touch <ArrowRight size={18} aria-hidden="true" /></Link>
    </div>
  </section>;
}
