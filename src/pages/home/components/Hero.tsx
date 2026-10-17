import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return <section className="hero section-border">
    <div className="container hero-grid">
      <div>
        <p className="eyebrow">IT & cybersecurity · Ohio + nationwide</p>
        <h1>Keep your business running.<br /><span className="accent">Keep it secure.</span></h1>
        <p className="lede">IT support, cybersecurity, and virtual CISO services for small businesses. We solve the technical issues and help you plan for what’s next.</p>
        <div className="actions"><Link to="/contact" className="button">Talk to our team <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/services" className="text-link">Explore services <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
      <aside className="hero-aside" aria-label="Experience and availability">
        <div className="hero-stat"><strong>18<span>+</span></strong><span>years of IT & cybersecurity experience<br />behind Kyroscoe</span></div>
        <div className="aside-line"><span className="eyebrow">Local support</span><p>Dayton. Springfield. Columbus.</p></div>
        <div className="aside-line"><span className="eyebrow">Remote support</span><p>Across the United States.</p></div>
        <Link to="/about" className="text-link">Meet our founder <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </aside>
    </div>
  </section>;
}
