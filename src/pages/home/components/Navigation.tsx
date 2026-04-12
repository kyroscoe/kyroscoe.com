import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { actionLink, navLinks } from './siteData';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (href: string) => {
    navigate(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => go('/')} className="group text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300/80">Kyroscoe</div>
          <div className="text-lg font-black tracking-tight text-white transition group-hover:text-emerald-300">IT Solutions</div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            const active = location.pathname === item.href;
            return (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className={`text-sm font-medium transition ${active ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => go(actionLink.href)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-emerald-400/20"
          >
            {actionLink.label}
            <ArrowRight className="h-4 w-4" />
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#08131e] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go(actionLink.href)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/15 px-4 py-3 font-semibold text-white"
            >
              {actionLink.label}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
