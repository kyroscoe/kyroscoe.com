import { Booking } from './components/Booking';
import { ClientPortal } from './components/ClientPortal';
import { Contact } from './components/Contact';
import { Development } from './components/Development';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { WebDesign } from './components/WebDesign';
import { PageShell } from './components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function HomePage() {
  usePageSEO({
    title: 'Kyroscoe IT Solutions | IT Support, Development, and Web Design',
    description:
      'Kyroscoe delivers IT support, software development, cybersecurity, and modern web design for businesses that need practical, dependable technology help.',
  });

  return (
    <PageShell>
      <Navigation />
      <Hero />
      <ClientPortal />
      <Services />
      <Development />
      <WebDesign />
      <Booking />
      <Contact />
      <Footer />
    </PageShell>
  );
}
