import { developmentServices, pageHero } from './siteData';
import { Panel, SectionIntro } from './ui';

export function Development() {
  return (
    <section className="bg-[#06111a] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={pageHero.development.eyebrow} title={pageHero.development.title} text={pageHero.development.text} />

        <div className="grid gap-6 md:grid-cols-2">
          {developmentServices.map((service) => {
            const Icon = service.icon;
            return (
              <Panel key={service.title} className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{service.tag}</div>
                    <h3 className="mt-3 text-2xl font-black text-white">{service.title}</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                      {bullet}
                    </span>
                  ))}
                </div>
              </Panel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
