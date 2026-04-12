import { primaryServices, process } from './siteData';
import { Panel, SectionIntro } from './ui';

export function Services() {
  return (
    <section className="border-b border-white/10 bg-[#08131e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Core services"
          title="Focused IT services that solve real operational problems."
          text="Kyroscoe helps businesses reduce downtime, tighten operations, and build the right systems when off-the-shelf tools stop fitting."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {primaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <Panel key={service.title} className="p-7">
                <div className="mb-5 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{service.tag}</div>
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {process.map((item) => (
            <Panel key={item.step} className="p-6">
              <div className="text-sm font-bold tracking-[0.28em] text-emerald-300">{item.step}</div>
              <h4 className="mt-4 text-xl font-black text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
