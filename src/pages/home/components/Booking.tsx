import { CalendarDays, CheckCircle2, FileSpreadsheet, MessagesSquare } from 'lucide-react';
import { pageHero } from './siteData';
import { Panel, SectionIntro } from './ui';

const outcomes = [
  {
    title: 'IT support planning',
    text: 'Talk through current issues, support needs, and the right level of help for your business.',
    icon: MessagesSquare,
  },
  {
    title: 'Development direction',
    text: 'Map out the next move for a web app, mobile app, automation, or integration project.',
    icon: CalendarDays,
  },
  {
    title: 'Website and design scope',
    text: 'Discuss web design, branding direction, hosting, deployment, and what the site needs to do.',
    icon: FileSpreadsheet,
  },
];

const consultationEmail =
  'mailto:support@kyroscoe.com?subject=Free%20consultation%20request&body=Hi%20Kyroscoe,%0D%0A%0D%0AI%27d%20like%20to%20schedule%20a%20consultation%20for%20my%20business.%0D%0A%0D%0AService%20area:%20%0D%0ATimeline:%20%0D%0ABest%20contact%20number:%20';

export function Booking() {
  return (
    <section className="bg-[#08131e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionIntro eyebrow={pageHero.booking.eyebrow} title={pageHero.booking.title} text={pageHero.booking.text} />
            <Panel className="p-6">
              <div className="mb-4 flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="font-semibold">What the consultation is for</span>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Use the consultation to talk through your current challenges, service needs, timeline, and the best direction for IT support, software development, or web design.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={consultationEmail}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  Request by email
                </a>
                <a
                  href="tel:+19376311521"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call to schedule
                </a>
              </div>
            </Panel>
          </div>

          <div className="grid gap-6">
            {outcomes.map((item) => {
              const Icon = item.icon;
              return (
                <Panel key={item.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </Panel>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
