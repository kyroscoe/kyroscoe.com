import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navigation } from './components/Navigation';
import { PartnerBadges } from './components/PartnerBadges';
import { Services } from './components/Services';
import { PageShell } from './components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function HomePage() {
  usePageSEO('/');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}>
    <Hero />
    <section className="partner-band section-border" aria-label="Technology partnerships"><div className="container partner-band-inner"><p className="eyebrow">Technology partnerships</p><PartnerBadges /></div></section>
    <Services /><Intro /><Contact />
  </main><Footer /></PageShell>;
}
