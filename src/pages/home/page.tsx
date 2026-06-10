import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { PageShell } from './components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function HomePage() {
  usePageSEO({
    title: 'Kyroscoe | Practical Technology for Small Businesses',
    description:
      'Kyroscoe helps small businesses with websites, IT support, cybersecurity guidance, custom tools, and practical technical consulting.',
  });

  return (
    <PageShell>
      <Navigation />
      <Hero />
      <Intro />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </PageShell>
  );
}
