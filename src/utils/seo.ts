import { business } from '../pages/home/components/siteData';

export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://kyroscoe.com').replace(/\/$/, '');
export const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Kyroscoe | IT Support & Cybersecurity in Ohio',
    description: 'IT support, cybersecurity, and vCISO services. On-site in Dayton, Springfield, and Columbus, Ohio. Remote support nationwide.',
  },
  '/services': {
    title: 'IT Support, Cybersecurity & vCISO Services | Kyroscoe',
    description: 'Helpdesk, security planning, vCISO, website support, and automation. Ongoing support plans for small businesses in Ohio and nationwide.',
  },
  '/about': {
    title: 'About Korey Havens & Kyroscoe',
    description: 'Meet Korey Havens, founder of Kyroscoe. 18+ years of cybersecurity leadership across federal, defense, SaaS, and healthcare environments.',
  },
  '/work': {
    title: 'Selected Website Projects | Kyroscoe',
    description: 'Explore Kyroscoe client website projects, including design, content, domain setup, hosting, and launch support.',
  },
  '/contact': {
    title: 'Contact Kyroscoe | IT & Cybersecurity Support',
    description: 'Call 937-631-1521 or email info@kyroscoe.com. On-site support in Dayton, Springfield, and Columbus. We respond to inquiries within 24 hours.',
  },
  '/privacy': {
    title: 'Privacy Policy | Kyroscoe',
    description: 'How Kyroscoe handles website inquiries, contact details, and information shared when requesting services.',
  },
  '/terms': {
    title: 'Terms of Service | Kyroscoe',
    description: 'Terms for Kyroscoe IT support, cybersecurity, website services, and ongoing support plans.',
  },
};

export function getPageSEO(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const page = pageMetadata[path];
  return {
    ...(page || { title: 'Page Not Found | Kyroscoe', description: 'This page is unavailable. Contact Kyroscoe for IT and cybersecurity support.' }),
    url: siteUrl + (path === '/' ? '/' : path),
    noindex: !page,
    image: siteUrl + '/social-card.png',
  };
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': siteUrl + '/#business',
  name: 'Kyroscoe',
  url: siteUrl,
  email: business.email,
  telephone: '+1-937-631-1521',
  logo: siteUrl + '/brand/horizontal-lockup-dark-removebg.png',
  description: 'IT support, cybersecurity, and virtual CISO services for small businesses.',
  areaServed: [
    { '@type': 'City', name: 'Dayton, Ohio' },
    { '@type': 'City', name: 'Springfield, Ohio' },
    { '@type': 'City', name: 'Columbus, Ohio' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: ['IT Support', 'Cybersecurity', 'Virtual CISO', 'Website Support', 'Workflow Automation'],
};

export function initializeSEO() {
  if (document.getElementById('business-schema')) return;
  const script = document.createElement('script');
  script.id = 'business-schema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(businessSchema);
  document.head.appendChild(script);
}
