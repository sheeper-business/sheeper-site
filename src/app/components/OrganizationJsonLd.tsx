const SITE = 'https://www.sheeper.app';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sheeper',
  url: SITE,
  logo: `${SITE}/logo.png`,
  description:
    'Sheeper is a mobile app for digital loyalty cards at restaurants and cafés in Lisbon — collect stamps and unlock rewards.',
  sameAs: ['https://www.instagram.com/sheeper.app/', 'https://www.tiktok.com/@sheeperapp'],
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Sheeper',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  description:
    'Digital loyalty cards for venues in Lisbon. Collect stamps and redeem rewards in the Sheeper app.',
};

export function OrganizationJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
    </>
  );
}
