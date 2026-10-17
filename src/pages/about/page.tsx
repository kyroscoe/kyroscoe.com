import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { certifications } from '../home/components/siteData';
import { PageShell, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function AboutPage() {
  usePageSEO('/about');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><SectionIntro level={1} eyebrow="About Kyroscoe" title="Security experience. A direct relationship." text="We help small businesses make informed IT and cybersecurity decisions." /></section>
    <section className="section section-border"><div className="container about-grid">
      <figure>
        <img src="/brand/korey-havens.webp" alt="Korey Havens, founder of Kyroscoe" className="founder-photo" width="600" height="700" />
        <figcaption className="founder-caption">Korey Havens<span>Founder, Kyroscoe</span></figcaption>
      </figure>
      <div className="about-copy"><p className="eyebrow">Meet our founder</p><h2>18+ years leading cybersecurity programs.</h2>
        <p>Korey Havens has built and led enterprise security programs across federal, defense, SaaS, and healthcare environments.</p>
        <p>His experience spans incident response, compliance, cloud security, and audit readiness. He works with executives, boards, and technical teams to explain risk and turn security priorities into business decisions.</p>
        <p>At Kyroscoe, we apply that experience to small business IT support, security planning, and virtual CISO services.</p>
        <Link className="text-link" to="/contact">Talk with our team <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="Professional certifications" title="Credentials behind the guidance." />
      <ul className="credentials">{certifications.map(([short, full]) => <li key={short}><strong>{short}</strong><span>{full}</span></li>)}</ul>
    </div></section><Contact />
  </main><Footer /></PageShell>;
}
