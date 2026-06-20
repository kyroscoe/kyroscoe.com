import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../home/components/Footer";
import { Navigation } from "../home/components/Navigation";
import { PageShell, Panel, SectionIntro } from "../home/components/ui";
import { usePageSEO } from "../../utils/usePageSEO";

export default function AboutPage() {
  const navigate = useNavigate();

  usePageSEO({
    title: "About | Kyroscoe",
    description:
      "Learn about Kyroscoe and founder Korey Havens, helping small businesses with IT support, cybersecurity, web design, software development, and practical technology guidance.",
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Who We Are"
              title="About Kyroscoe"
              text="Practical technology support built around the way your business actually works."
            />

            <Panel className="p-6 sm:p-8 lg:p-10">
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(320px,360px)_1fr] lg:gap-14">
                <figure className="mx-auto w-full max-w-[360px] lg:mx-0">
                  <img
                    src="/brand/korey-havens.png"
                    alt="Korey Havens, founder of Kyroscoe"
                    className="aspect-[6/7] w-full rounded-xl border border-cyan-300/10 object-cover object-top shadow-2xl shadow-black/30"
                  />
                  <figcaption className="mt-4 border-l-2 border-cyan-300/60 pl-4">
                    <div className="font-semibold text-white">Korey Havens</div>
                    <div className="mt-1 text-sm text-slate-400">
                      Founder, Kyroscoe
                    </div>
                  </figcaption>
                </figure>

                <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                  <p>
                    Kyroscoe was founded by Korey Havens, an IT and
                    cybersecurity professional with experience across support,
                    security, software development, and business systems.
                  </p>
                  <p>
                    After years of solving real-world technical problems, Korey
                    built Kyroscoe to help small businesses get practical
                    technology support without the confusion, inflated pricing,
                    or one-size-fits-all advice that often comes with
                    traditional IT providers.
                  </p>
                  <p>
                    Kyroscoe helps businesses with IT support, cybersecurity
                    consulting, web design, software development, and technology
                    guidance. The goal is simple: understand the problem,
                    explain the options clearly, and build technology that
                    supports the way your business actually works.
                  </p>
                  <p className="font-semibold text-white">
                    Technology should make your business easier to run, not
                    harder. Kyroscoe exists to make that happen.
                  </p>

                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Work With Kyroscoe
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Panel>
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
