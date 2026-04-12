import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { PageShell } from '../home/components/ui';
import { WebDesign } from '../home/components/WebDesign';
import { usePageSEO } from '../../utils/usePageSEO';

export default function WebDesignPage() {
  usePageSEO({
    title: 'Web Design Services | Kyroscoe IT Solutions',
    description:
      'See Kyroscoe web design services for modern websites, stronger messaging, better user experience, and launch-ready deployment.',
  });

  return (
    <PageShell>
      <Navigation />
      <WebDesign />
      <Footer />
    </PageShell>
  );
}
