import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { services } from '../home/components/siteData';
import { PageShell, Panel, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

const detailCopy: Record<string, string> = {
  'IT Support & Business Tech':
    'Support starts with the practical problems that slow a small business down: accounts, email, devices, access, software confusion, and the occasional machine that needs hands-on repair.',
  'Cybersecurity Guidance':
    'Security work is focused on reducing real risk without burying the business in enterprise process. The goal is better habits, cleaner access, safer accounts, and clearer visibility.',
  'Websites & Web Presence':
    'Website work is built around clarity, maintainability, and launch support. That can mean a new site, a cleaner landing page, DNS help, hosting setup, or fixing a site that no longer fits.',
  'Custom Tools & Consulting':
    'When off-the-shelf tools do not quite fit, Kyroscoe can help map workflows, plan internal tools, automate repetitive tasks, or translate a rough business need into a technical direction.',
};

export default function ServicesPage() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'Services | Kyroscoe',
    description:
      'Kyroscoe services include IT support, cybersecurity guidance, website builds, custom tools, and technical consulting for small businesses.',
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Services"
              title="Practical technical support without the oversized vendor pitch."
              text="Kyroscoe helps small businesses handle the technology they rely on: support issues, security basics, websites, workflows, and technical decisions."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Panel key={service.title} className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{service.tag}</div>
                        <h2 className="mt-3 text-2xl font-black text-white">{service.title}</h2>
                      </div>
                      <div className="border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-300">{service.description}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{detailCopy[service.title]}</p>
                    <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                );
              })}
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Work With Kyroscoe
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
