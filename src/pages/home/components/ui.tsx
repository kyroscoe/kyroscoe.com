import { ReactNode } from 'react';

export function SectionIntro({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{text}</p>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#06111a] text-white">{children}</div>;
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm ${className}`}>{children}</div>;
}
