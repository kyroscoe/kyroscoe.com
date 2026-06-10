import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { actionLink, navLinks } from "./siteData";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (href: string) => {
    navigate(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#03080b]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => go("/")}
          className="flex items-center gap-3 text-left"
        >
          <img
            src="/brand/horizontal-lockup-dark-removebg.png"
            alt="Kyroscoe"
            className="h-12 w-auto object-contain"
          />
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => {
            const active = location.pathname === item.href;
            return (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className={`text-sm font-medium transition ${active ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => go(actionLink.href)}
            className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
          >
            {actionLink.label}
            <ArrowRight className="h-4 w-4" />
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/15 bg-white/[0.03] text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-300/10 bg-[#050d12] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="rounded-md px-4 py-3 text-left text-slate-200 transition hover:bg-cyan-300/10"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go(actionLink.href)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 font-semibold text-white"
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
