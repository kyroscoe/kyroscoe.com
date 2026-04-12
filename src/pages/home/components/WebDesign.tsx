import { Check, Layers3 } from 'lucide-react';
import { pageHero, webDesignServices } from './siteData';
import { Panel, SectionIntro } from './ui';

const principles = [
  'Less clutter and more hierarchy',
  'Stronger headlines with clearer offers',
  'Dark, modern palette with sharper contrast',
  'Component-based layout that scales cleanly',
];

export function WebDesign() {
  return (
    <section className="border-y border-white/10 bg-[#08131e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <SectionIntro eyebrow={pageHero.web.eyebrow} title={pageHero.web.title} text={pageHero.web.text} />
            <div className="grid gap-6">
              {webDesignServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Panel key={service.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{service.tag}</div>
                        <h3 className="mt-2 text-xl font-black text-white">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                      </div>
                    </div>
                  </Panel>
                );
              })}
            </div>
          </div>

          <Panel className="p-7 lg:sticky lg:top-28">
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
              <Layers3 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-white">What clients can expect</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The approach is built around clearer messaging, sharper hierarchy, and a site experience that feels more specific to the business.
            </p>
            <ul className="mt-6 space-y-4">
              {principles.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                  <Check className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  );
}
