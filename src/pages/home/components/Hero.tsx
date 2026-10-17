import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrambleText } from './ScrambleText';

export function Hero() {
  return <section className="hero section-border">
    <div className="container hero-grid">
      <div>
        <p className="eyebrow">IT & cybersecurity</p>
        <h1><ScrambleText text="Keep your business running." /><span className="accent"><ScrambleText text="Keep it secure." delay={180} /></span></h1>
        <p className="lede">End-to-end IT and cybersecurity solutions for small businesses in Springfield, Ohio. From everyday support to long-term planning, we keep your technology working together.</p>
        <div className="actions"><Link to="/contact" className="button">Talk to our team <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/services" className="text-link">Explore services <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
      <aside className="hero-aside" aria-label="Experience and availability">
        <div className="hero-stat"><strong>18<span>+</span></strong><span>years of IT & cybersecurity experience<br />behind Kyroscoe</span></div>
        <div className="aside-line"><span className="eyebrow">Local support</span><p>Springfield, Ohio & surrounding areas.</p></div>
        <div className="aside-line"><span className="eyebrow">Remote support</span><p>Across the United States.</p></div>
        <Link to="/about" className="text-link">Meet our founder <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </aside>
    </div>
  </section>;
}
