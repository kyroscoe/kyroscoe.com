import type { ReactNode } from 'react';

export function SectionIntro({ eyebrow, title, text, level = 2 }: {
  eyebrow: string; title: string; text?: string; level?: 1 | 2;
}) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><Heading>{title}</Heading>{text && <p className="lede">{text}</p>}</div>;
}
export function PageShell({ children }: { children: ReactNode }) {
  return <div className="page-shell">{children}</div>;
}
export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`panel ${className}`}>{children}</div>;
}
