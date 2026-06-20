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
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kyroscoe',
        alternateName: 'Kyroscoe | Practical Technology for Small Businesses',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: 'Kyroscoe',
        description:
          'Practical technology for small businesses, including IT support, cybersecurity guidance, website builds, custom tools, and technical consulting.',
        url: siteUrl,
        logo: `${siteUrl}/kyroscoe-logo.png`,
        serviceType: [
          'IT Support',
          'Cybersecurity Guidance',
          'Website Builds',
          'Technical Consulting',
          'Custom Tools',
          'Workflow Automation',
        ],
        areaServed: {
          '@type': 'Place',
          name: 'United States',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Small Business Technology Services',
          itemListElement: [
            'IT Support & Business Tech',
            'Cybersecurity Guidance',
            'Websites & Web Presence',
            'Custom Tools & Consulting',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name,
            },
          })),
        },
      },
    ],
  });

  document.head.appendChild(schemaScript);
};
