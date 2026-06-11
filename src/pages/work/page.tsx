import { ArrowRight, ExternalLink } from 'lucide-react';
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
              text="Selected work from Kyroscoe projects, client builds, and internal product experiments. These examples focus on practical technology work: websites, systems, automation, support, security, and small-business problem solving."
            />

            <div className="space-y-8">
              {caseStudies.map((study) => (
                <Panel key={study.name} className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-cyan-300/10 bg-black/20 p-6 lg:border-b-0 lg:border-r lg:border-cyan-300/10">
                      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(15,244,226,0.08),rgba(255,255,255,0.02))]">
                        {study.image ? (
                          <>
                            {study.url ? (
                              <a
                                href={study.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${study.name} website`}
                                className="flex h-full w-full items-center justify-center"
                              >
                                <img src={study.image} alt={`${study.name} logo`} className="max-h-full max-w-full object-contain p-6" />
                              </a>
                            ) : (
                              <img src={study.image} alt={`${study.name} visual`} className="h-full w-full object-contain p-6" />
                            )}
                          </>
                        ) : (
                          <div className="text-center">
                            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/75">Project planning</div>
                            <div className="mt-3 text-2xl font-black text-white">{study.name}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{study.type}</div>
                      <h2 className="mt-3 text-3xl font-black text-white">{study.name}</h2>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{study.overview}</p>

                      <div className="mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Work completed</h3>
                        <ul className="mt-4 space-y-3">
                          {study.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300">
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Tags</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span key={tag} className="border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-sm text-slate-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {study.url && (
                          <a
                            href={study.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
                          >
                            Visit Site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <button
                          onClick={() => navigate('/contact')}
                          className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                        >
                          Start a Project
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
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
