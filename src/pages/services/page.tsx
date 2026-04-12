import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { Services } from '../home/components/Services';
import { PageShell } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function ServicesPage() {
  usePageSEO({
    title: 'IT Support Services | Kyroscoe IT Solutions',
    description:
      'Explore Kyroscoe IT support services including helpdesk support, network infrastructure, cybersecurity, and managed technology operations.',
  });

  return (
    <PageShell>
      <Navigation />
      <Services />
      <Footer />
    </PageShell>
  );
}
