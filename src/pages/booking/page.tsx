import { Booking } from '../home/components/Booking';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { PageShell } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function BookingPage() {
  usePageSEO({
    title: 'Book a Consultation | Kyroscoe IT Solutions',
    description:
      'Request a consultation with Kyroscoe to discuss IT support, software development, web design, and business technology planning.',
  });

  return (
    <PageShell>
      <Navigation />
      <Booking />
      <Footer />
    </PageShell>
  );
}
