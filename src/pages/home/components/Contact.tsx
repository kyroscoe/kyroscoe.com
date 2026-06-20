import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Contact() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#03080b] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Contact
        </div>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Work With Kyroscoe</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Need help with a website, IT issue, cybersecurity concern, or custom technology project? Send the details and Kyroscoe will help figure out the cleanest next step.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
        >
          Work With Kyroscoe
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
