import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Intro() {
  return <section className="section section-border">
    <div className="container founder-summary">
      <p className="eyebrow">Experience that informs the work</p>
      <div><h2>Enterprise security experience.<br />Small business focus.</h2>
        <p>Our founder, Korey Havens, has led security programs across federal, defense, SaaS, and healthcare environments. We bring that experience to your IT and security decisions.</p>
        <Link className="text-link" to="/about">About Kyroscoe <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
