import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navLinks } from './siteData';
import { BrandMark } from './BrandMark';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Kyroscoe home" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => <NavLink key={item.href} to={item.href}>{item.label}</NavLink>)}
          <Link className="button button-small" to="/contact">Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
        </nav>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-nav container" aria-label="Mobile navigation" hidden={!open}>
        {navLinks.map((item) => <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        <Link to="/contact" onClick={() => setOpen(false)}>Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
      </nav>
    </header>
  </>;
}
