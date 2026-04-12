import { ArrowRight, LineChart, ShieldCheck, Wrench } from 'lucide-react';
import { Panel } from './ui';

const focusAreas = [
  {
    title: 'Billing support',
    text: 'Get help with invoices, payment questions, and receipt requests without chasing multiple contacts.',
    icon: Wrench,
  },
  {
    title: 'Service visibility',
    text: 'Stay aligned on active support work, project updates, and the next steps for your business.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure communications',
    text: 'Share requests and account questions through a direct, secure support channel.',
    icon: LineChart,
  },
];

export function ClientPortal() {
  return (
    <section className="bg-[#06111a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Panel className="overflow-hidden p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300/80">Client support</div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                A cleaner way to handle support, billing, and account questions.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Reach Kyroscoe directly for account help, service updates, and support coordination without getting stuck in a generic help desk loop.
              </p>
              <a
                href="mailto:support@kyroscoe.com?subject=Client%20support%20request"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {focusAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-[#08131e] p-6">
                    <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
