import { useNavigate } from "react-router-dom";
import { footerLinks } from "./siteData";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-cyan-300/10 bg-[#020608]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <img
            src="/brand/horizontal-lockup-dark-removebg.png"
            alt="Kyroscoe"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Practical technology for small businesses: IT support, cybersecurity
            guidance, website builds, custom tools, and general technical
            consulting.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className="text-left transition hover:text-cyan-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
