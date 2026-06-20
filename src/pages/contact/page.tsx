import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { PageShell, Panel, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

const serviceOptions = [
  'IT Support',
  'Cybersecurity Guidance',
  'Website Build',
  'Website Fix or Redesign',
  'Custom Tool or Automation',
  'General Tech Consulting',
  'Not Sure Yet',
];

export default function ContactPage() {
  usePageSEO({
    title: 'Work With Kyroscoe | Kyroscoe',
    description:
      'Start a Kyroscoe project for a website, IT issue, cybersecurity concern, custom tool, automation, or technical consulting need.',
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionIntro
              eyebrow="Contact"
              title="Work With Kyroscoe"
              text="Need help with a website, IT issue, cybersecurity concern, or custom technology project? Send the details and Kyroscoe will help figure out the cleanest next step."
            />

            <Panel className="p-6 sm:p-8">
              <form
                name="contact"
                action="/contact?success=true"
                method="POST"
                data-netlify="true"
                className="grid gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Name
                  <input name="name" autoComplete="name" required className="rounded-md border border-cyan-300/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Email
                  <input name="email" type="email" autoComplete="email" required className="rounded-md border border-cyan-300/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Business name
                  <input name="business" autoComplete="organization" className="rounded-md border border-cyan-300/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  What do you need help with?
                  <select name="service" className="rounded-md border border-cyan-300/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60">
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Project details
                  <textarea name="details" rows={7} className="rounded-md border border-cyan-300/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <button className="rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200" type="submit">
                  Work With Kyroscoe
                </button>
              </form>
            </Panel>
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
