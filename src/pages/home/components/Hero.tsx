import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BrandMark } from './BrandMark';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden border-b border-cyan-300/10 bg-[#03080b]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,244,226,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(15,244,226,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/40" />

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8 lg:py-20">
        <div className="min-w-0 max-w-full">
          <div className="mb-6 inline-flex border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Small business technology
          </div>
          <h1 className="max-w-full text-3xl font-black tracking-tight text-white min-[420px]:text-4xl sm:max-w-4xl sm:text-6xl lg:text-7xl">
            <span className="block">Practical technology</span>
            <span className="block">for small businesses.</span>
          </h1>
          <p className="mt-6 max-w-full text-lg leading-8 text-slate-300 sm:max-w-2xl sm:text-xl">
            Kyroscoe helps small businesses build, fix, and improve the technology they rely on - from websites and IT support to cybersecurity guidance, custom tools, and technical consulting.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center justify-center rounded-md border border-cyan-300/25 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              View Work
            </button>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm overflow-hidden rounded-lg border border-cyan-300/20 bg-cyan-300/[0.035] p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:max-w-md sm:p-10 lg:max-w-lg">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(103,232,249,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
            <div className="absolute left-0 top-0 h-px w-full bg-cyan-300/40" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-cyan-300/25" />
            <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px]">
              <BrandMark size="lg" />
            </div>
            <div className="relative mt-6 grid grid-cols-2 gap-3 text-sm font-semibold text-slate-300">
              {['Websites', 'IT Support', 'Cybersecurity', 'Custom Tools'].map((item) => (
                <div key={item} className="border border-cyan-300/10 bg-black/20 px-3 py-2 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
