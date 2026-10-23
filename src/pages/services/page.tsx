import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';
import { Navigation } from '../home/components/Navigation';
import { PartnerBadges } from '../home/components/PartnerBadges';
import { business, services, supportPlans } from '../home/components/siteData';
import { PageShell, Panel, SectionIntro } from '../home/components/ui';
import { usePageSEO } from '../../utils/usePageSEO';

export default function ServicesPage() {
  usePageSEO('/services');
  return <PageShell><Navigation /><main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><SectionIntro level={1} eyebrow="Services" title="IT that works. Security with a plan." text={business.serviceArea} /></section>
    <section className="section section-border"><div className="container service-details">
      {services.map((service) => {
        const Icon = service.icon;
        return <article key={service.id} id={service.id} className="panel service-detail">
          <Icon className="accent" size={28} strokeWidth={1.5} aria-hidden="true" /><h2>{service.title}</h2>
          <p>{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </article>;
      })}
    </div></section>
    <section id="support-plans" className="section section-border"><div className="container">
      <SectionIntro eyebrow="Ongoing support" title="Support plans built around your needs." text="We agree on the scope, availability, and pricing before work begins." />
      <div className="plan-grid">{supportPlans.map((plan) => <div key={plan.title}><h3>{plan.title}</h3><p>{plan.text}</p></div>)}</div>
      <Panel><p className="emergency-note" style={{ borderTop: 0, paddingTop: 0 }}><strong>Need emergency support?</strong> Call <a className="text-link" href={business.phoneHref}>{business.phone}</a> to discuss availability. Response and resolution depend on the issue and your support agreement.</p></Panel>
      <div className="actions"><Link className="button" to="/contact">Discuss a support plan <ArrowRight size={18} aria-hidden="true" /></Link></div>
    </div></section>
    <section className="section"><div className="container">
      <SectionIntro eyebrow="Technology partners" title="Support for the platforms you use." />
      <PartnerBadges />
      <aside className="panel partner-referral" aria-labelledby="ads-partner-title">
        <div><p className="eyebrow">Partner services</p><h3 id="ads-partner-title">Google Ads support</h3><p>For help with Google Ads, connect with our partner Calibration Media.</p></div>
        <a className="text-link" href="https://calibrationmediagroup.com/" target="_blank" rel="noopener noreferrer">Visit Calibration Media <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      </aside>
    </div></section>
    <Contact />
  </main><Footer /></PageShell>;
}
