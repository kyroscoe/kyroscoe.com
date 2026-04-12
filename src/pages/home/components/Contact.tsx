import { Mail, MessageSquareText, Phone } from 'lucide-react';
import { pageHero } from './siteData';
import { Panel, SectionIntro } from './ui';

const contactCards = [
  {
    title: 'Email Us',
    value: 'support@kyroscoe.com',
    note: "We'll respond within 24 hours.",
    icon: Mail,
    href: 'mailto:support@kyroscoe.com',
    action: 'Send an email',
  },
  {
    title: 'Call Us',
    value: '+1 (937) 631-1521',
    note: 'Available 24/7 for emergency support.',
    icon: Phone,
    href: 'tel:+19376311521',
    action: 'Call now',
  },
  {
    title: 'Business Hours',
    value: 'Mon-Fri 8:00 AM - 6:00 PM',
    note: 'Saturday 9:00 AM - 4:00 PM | Sunday closed | Emergency support available 24/7.',
    icon: MessageSquareText,
    href: 'mailto:support@kyroscoe.com?subject=After-hours%20support%20request',
    action: 'Request support',
  },
];

export function Contact() {
  return (
    <section className="bg-[#06111a] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={pageHero.contact.eyebrow} title={pageHero.contact.title} text={pageHero.contact.text} />
        <div className="grid gap-6 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <Panel key={card.title} className="flex h-full flex-col p-7">
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{card.title}</div>
                <div className="mt-3 text-2xl font-black text-white">{card.value}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.note}</p>
                <a
                  href={card.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-emerald-400/20"
                >
                  {card.action}
                </a>
              </Panel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
