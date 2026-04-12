export const initializeSEO = () => {
  const lastModifiedMeta = document.getElementById('last-modified');
  if (lastModifiedMeta) {
    const today = new Date().toISOString().split('T')[0];
    lastModifiedMeta.setAttribute('content', today);
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://kyroscoe.com';

  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Kyroscoe IT Solutions',
    description:
      'From full-service IT support to software development and modern web design. Expert helpdesk support, network infrastructure, cybersecurity, web app development, mobile development, and custom web design solutions for businesses.',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    serviceType: [
      'IT Support',
      'Software Development',
      'Web Design',
      'Helpdesk & Remote Support',
      'Network & Infrastructure',
      'Cybersecurity & Compliance',
      'Computer Repair & Maintenance',
      'Managed IT Packages',
      'Web App Development',
      'Mobile Development',
      'Automation & Integration',
      'Custom Development',
      'Design & Branding',
      'Hosting & Deployment',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'IT Support Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Helpdesk & Remote Support',
                description: 'Fast, ticket-based remote assistance for everyday issues - from printer errors to software bugs.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Network & Infrastructure',
                description: 'Cloud migrations, VPN setup, and secure Wi-Fi and network design for small to mid-size businesses.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cybersecurity & Compliance',
                description: 'Endpoint protection, vulnerability scans, and employee security training to keep your data safe.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Computer Repair & Maintenance',
                description: 'Hardware diagnostics, OS installs, malware cleanup, and PC optimization - local or remote.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Managed IT Packages',
                description: 'Full-service IT care with monthly maintenance, backups, patching, and monitoring.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Software Development',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web App Development',
                description: 'Full-stack web apps built with React, Next.js, and modern APIs.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile Development',
                description: 'Cross-platform apps using React Native and Flutter for iOS and Android.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Automation & Integration',
                description: 'Custom scripts, APIs, and dashboards to streamline your workflow.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Web Design',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Development',
                description: 'From landing pages to eCommerce sites - built for speed and scalability.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Design & Branding',
                description: 'Tailored UI/UX and brand-focused layouts using Tailwind and modern animations.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hosting & Deployment',
                description: 'Fast, secure hosting on Vercel, Netlify, or your preferred environment.',
              },
            },
          ],
        },
      ],
    },
  });

  document.head.appendChild(schemaScript);
};
