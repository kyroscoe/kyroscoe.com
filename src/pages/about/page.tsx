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
      <div className="about-copy"><p className="eyebrow">Meet our founder</p><h2>IT and cybersecurity experience since 2007.</h2>
        <p>Korey Havens began his career in 2007, progressing from administration roles to Chief Information Security Officer (CISO). His work spans IT operations and cybersecurity across federal, defense, SaaS, and healthcare environments.</p>
        <p>His experience spans incident response, compliance, cloud security, and audit readiness. He works with executives, boards, and technical teams to explain risk and turn security priorities into business decisions.</p>
        <p>At Kyroscoe, we apply that experience to small business IT support, security planning, and virtual CISO services.</p>
        <Link className="text-link" to="/contact">Talk with our team <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </div></section>
    <section id="certifications" className="section"><div className="container"><SectionIntro eyebrow="Professional certifications" title="Credentials behind the guidance." text="Professional certifications held by our founder, Korey Havens." />
      <ul className="credentials">{certifications.map((credential) => <li key={credential.id}>
        <div className="credential-art"><img src={credential.image} alt="" width="180" height="130" loading="lazy" /></div>
        <div className="credential-copy"><strong>{credential.short}</strong><span>{credential.title}</span></div>
      </li>)}</ul>
    </div></section><Contact />
  </main><Footer /></PageShell>;
}
