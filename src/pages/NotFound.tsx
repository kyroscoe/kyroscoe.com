import { Link, useLocation } from 'react-router-dom';
import { Footer } from './home/components/Footer';
import { Navigation } from './home/components/Navigation';
import { PageShell, SectionIntro } from './home/components/ui';
import { usePageSEO } from '../utils/usePageSEO';

export default function NotFound() {
  const { pathname } = useLocation();
  usePageSEO(pathname);
  return <PageShell><Navigation /><main className="not-found" id="main-content" tabIndex={-1}><div className="container">
    <SectionIntro level={1} eyebrow="404" title="Page not found." text="The page may have moved or the link may be incorrect." />
    <div className="actions"><Link to="/" className="button">Return home</Link><Link to="/contact" className="text-link">Contact our team</Link></div>
  </div></main><Footer /></PageShell>;
}
