import { ArrowRight, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ctaPills, proofPoints, stats } from './siteData';
import { Panel } from './ui';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#06111a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.22),_transparent_35%),radial-gradient(circle_at_75%_20%,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(16,185,129,0.10),transparent_40%,rgba(59,130,246,0.10))] blur-3xl lg:block" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Trusted IT Solutions
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your <span className="text-emerald-300">Complete IT Partner</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            From full-service IT support to software development and modern web design — we deliver comprehensive technology solutions that drive your business forward.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {ctaPills.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate('/booking')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:translate-y-[-1px]"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <div className="text-3xl font-black text-white">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Panel className="p-6 sm:p-7">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#08131e] p-6">
              <div className="mb-4 flex items-center gap-3 text-emerald-300">
                <ShieldCheck className="h-5 w-5" />
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">Why businesses choose Kyroscoe</div>
              </div>
              <div className="space-y-4">
                {proofPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.label}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          Practical support, secure systems, and modern builds without the recycled agency feel.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                Kyroscoe brings IT support, software development, and modern web design together in one sharper, more credible experience.
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
