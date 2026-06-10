import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { caseStudies } from '../home/components/siteData';
import { PageShell, Panel, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function WorkPage() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'Work | Kyroscoe',
    description: 'Case studies for Kyroscoe website, technical support, custom tool, and practical technology projects.',
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Work"
              title="Case studies for practical technology projects."
              text="A closer look at websites, business systems, brand direction, and technical planning work."
            />

            <div className="space-y-8">
              {caseStudies.map((study) => (
                <Panel key={study.name} className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-cyan-300/10 bg-black/20 p-6 lg:border-b-0 lg:border-r lg:border-cyan-300/10">
                      <div className="flex aspect-[16/10] items-center justify-center border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(15,244,226,0.08),rgba(255,255,255,0.02))]">
                        <div className="text-center">
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/75">Visual placeholder</div>
                          <div className="mt-3 text-2xl font-black text-white">{study.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{study.type}</div>
                      <h2 className="mt-3 text-3xl font-black text-white">{study.name}</h2>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{study.overview}</p>

                      <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Problem</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{study.problem}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Outcome</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{study.outcome}</p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Work completed</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{study.work}</p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Tools / skills used</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.tools.map((tool) => (
                            <span key={tool} className="border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-sm text-slate-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => navigate('/contact')}
                        className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                      >
                        Start a Project
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
