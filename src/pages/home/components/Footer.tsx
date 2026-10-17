import { Link } from 'react-router-dom';
import { business, footerLinks } from './siteData';
import { BrandMark } from './BrandMark';

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div>
        <Link to="/" className="brand" aria-label="Kyroscoe home"><BrandMark /></Link>
        <p className="footer-description">IT support. Cybersecurity. A team you can call.</p>
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <a className="footer-phone" href={business.phoneHref}>{business.phone}</a>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
      </nav>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kyroscoe, LLC</span><span>Ohio on-site · Nationwide remote</span></div>
  </footer>;
}
