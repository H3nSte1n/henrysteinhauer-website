export const SITE_URL = 'https://steinhauer.dev';
export const WORKSHOP_URL = 'https://workshop.steinhauer.dev';

export const HOME_TITLE = 'Henry Steinhauer - Backend Software Engineer';
export const HOME_DESCRIPTION =
  'Henry Steinhauer is a backend software engineer building Go services, developer tools and AI-agent skills. Projects, notes and contact details.';
export const IMAGE_URL = `${SITE_URL}/assets/og-image.jpg`;
export const IMAGE_WIDTH = '1200';
export const IMAGE_HEIGHT = '627';

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Henry Steinhauer',
      description: HOME_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Henry Steinhauer',
      jobTitle: 'Backend Software Engineer',
      url: `${SITE_URL}/`,
      image: IMAGE_URL,
      sameAs: [
        WORKSHOP_URL,
        'https://github.com/H3nSte1n',
        'https://www.linkedin.com/in/henry-steinhauer/',
        'https://medium.com/@henrysteinhauer',
      ],
    },
  ],
};
