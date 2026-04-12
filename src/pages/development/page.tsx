import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { Development } from '../home/components/Development';
import { PageShell } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function DevelopmentPage() {
  usePageSEO({
    title: 'Software Development | Kyroscoe IT Solutions',
    description:
      'Kyroscoe builds web apps, mobile apps, automation workflows, and custom software solutions backed by ongoing support.',
  });

  return (
    <PageShell>
      <Navigation />
      <Development />
      <Footer />
    </PageShell>
  );
}
