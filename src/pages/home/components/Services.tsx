import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from './siteData';
import { SectionIntro } from './ui';

export function Services() {
  return <section className="section section-border">
    <div className="container">
      <SectionIntro eyebrow="How we help" title="Support today. Security for what’s next." />
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <article key={service.id} className={`service-card ${index < 2 ? 'service-primary' : ''}`}>
            <Icon size={25} strokeWidth={1.5} className="accent" aria-hidden="true" />
            <h3><Link to={`/services#${service.id}`}>{service.title}<ArrowUpRight size={19} aria-hidden="true" /></Link></h3>
            <p>{service.description}</p>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
