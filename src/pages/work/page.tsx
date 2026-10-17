import { ArrowUpRight } from 'lucide-react';
import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { projects, serviceExamples } from '../home/components/siteData';
import { PageShell, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

const images: Record<string, string> = {
  'midwest-fencing': '/brand/midwest-fence-logo.png',
  'buckeye-pads': '/brand/buckeye-pads-logo.png',
  'bb-property': '/brand/bb-property-logo.jpg',
};

export default function WorkPage() {
  usePageSEO('/work');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><SectionIntro level={1} eyebrow="Selected work & experience" title="IT support, security, and website projects." text="IT and cybersecurity experience from our founder’s career, alongside Kyroscoe website projects." /></section>
    <section id="it-security" className="section section-border"><div className="container">
      <SectionIntro eyebrow="IT & cybersecurity experience" title="Support, assessment, and advisory work." text="Selected engagements from Korey Havens’ professional experience." />
      <div className="engagement-grid">{serviceExamples.map((example) => <article id={example.id} className="panel engagement-card" key={example.id}>
        <p className="eyebrow">{example.category}</p><h3>{example.title}</h3><p className="engagement-client">{example.client}</p><p>{example.description}</p>
      </article>)}</div>
    </div></section>
    <section id="websites" className="section"><div className="container">
      <SectionIntro eyebrow="Website projects" title="Built and launched for local businesses." />
      <div className="project-list">
      {projects.map((project) => <article className="project" key={project.id} id={project.id}>
        <a className="project-visual" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>
          <img src={images[project.id]} alt={`${project.name} logo`} width="420" height="240" loading="lazy" />
        </a>
        <div><p className="eyebrow">{project.type}</p><h2>{project.name}</h2><p>{project.description}</p>
          <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit live site <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </article>)}
      </div>
    </div></section><Contact />
  </main><Footer /></PageShell>;
}
