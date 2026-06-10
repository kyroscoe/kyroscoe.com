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
      "Kyroscoe is a professional technology business helping small businesses with IT operations, cybersecurity, websites, and practical technical consulting.",
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <section className="border-b border-cyan-300/10 bg-[#03080b] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionIntro
                eyebrow="About"
                title="A technical business built for practical small business problems."
                text="Founder-led, technical, and focused on useful outcomes."
              />
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <Panel className="p-7 sm:p-8">
              <img
                src="/brand/horizontal-lockup-dark-removebg.png"
                alt="Kyroscoe"
                className="mx-auto mb-8 w-full max-w-md"
              />
              <p className="text-lg leading-8 text-slate-300">
                Kyroscoe combines experience in IT operations, cybersecurity,
                web development, and business technology to help small
                businesses solve practical problems. Some clients need a
                website. Others need help fixing technical issues, improving
                security, cleaning up systems, or planning a custom tool.
                Kyroscoe exists to make technology clearer, more useful, and
                easier to manage.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "IT operations",
                  "Cybersecurity guidance",
                  "Web development",
                  "Business technology",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-cyan-300/10 bg-black/20 p-4 text-sm font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
