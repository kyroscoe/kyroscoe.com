import { services } from './siteData';
import { Panel, SectionIntro } from './ui';

export function Services() {
  return (
    <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="Technical help for the systems small businesses actually use."
          text="Four practical service areas, kept broad enough for real business problems and specific enough to know where the work starts."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Panel key={service.title} className="p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{service.tag}</div>
                  <div className="border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
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
      </div>
    </section>
  );
}
