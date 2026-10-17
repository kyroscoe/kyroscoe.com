import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { PageShell } from './components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function HomePage() {
  usePageSEO('/');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}><Hero /><Services /><Intro /><Contact /></main><Footer /></PageShell>;
}
