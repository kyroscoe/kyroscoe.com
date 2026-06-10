import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from './siteData';
import { Panel, SectionIntro } from './ui';

export function Work() {
  const navigate = useNavigate();

  return (
    <section className="border-b border-cyan-300/10 bg-[#050d12] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Work"
          title="Recent Work"
          text="Websites, technical support, custom tools, and practical technology projects."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Panel key={project.name} className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{project.type}</div>
              <h3 className="mt-3 text-2xl font-black text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Work completed</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">{project.work}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/work')}
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </button>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
