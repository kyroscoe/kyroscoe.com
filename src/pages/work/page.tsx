import { ArrowUpRight } from 'lucide-react';
import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { projects } from '../home/components/siteData';
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
    <section className="page-intro container"><SectionIntro level={1} eyebrow="Selected work" title="Websites we’ve built and launched." text="A selection of client website projects, from content and design to domains and hosting." /></section>
    <section className="section"><div className="container project-list">
      {projects.map((project) => <article className="project" key={project.id} id={project.id}>
        <a className="project-visual" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>
          <img src={images[project.id]} alt={`${project.name} logo`} width="420" height="240" loading="lazy" />
        </a>
        <div><p className="eyebrow">{project.type}</p><h2>{project.name}</h2><p>{project.description}</p>
          <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit live site <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </article>)}
    </div></section><Contact />
  </main><Footer /></PageShell>;
}
