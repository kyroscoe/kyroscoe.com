import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { PageShell } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function ContactPage() {
  usePageSEO({
    title: 'Contact Kyroscoe | IT Support and Project Inquiries',
    description:
      'Contact Kyroscoe for IT support, development projects, website work, consultations, and urgent business technology help.',
  });

  return (
    <PageShell>
      <Navigation />
      <Contact />
      <Footer />
    </PageShell>
  );
}
