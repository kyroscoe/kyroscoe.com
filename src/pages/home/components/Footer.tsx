import { useNavigate } from 'react-router-dom';
import { footerLinks } from './siteData';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 bg-[#040b12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">Kyroscoe</div>
          <div className="mt-3 text-2xl font-black text-white">Your trusted partner for comprehensive IT solutions, software development, and modern web design services.</div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Call +1 (937) 631-1521 or email support@kyroscoe.com for support, development, web design, or consultation requests.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <button key={item.href} onClick={() => navigate(item.href)} className="text-left transition hover:text-white">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
