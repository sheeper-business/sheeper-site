import {
  appStoreUrl,
  playStoreUrl,
  siteName,
  siteUrl,
} from '@/lib/seo';

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Sheeper é uma app de cartões de fidelização digital para restaurantes e cafés — carimbos, recompensas e clientes que voltam.',
  areaServed: {
    '@type': 'City',
    name: 'Lisboa',
    containedInPlace: {
      '@type': 'Country',
      name: 'Portugal',
    },
  },
  sameAs: [
    'https://www.instagram.com/sheeper.app/',
    'https://www.tiktok.com/@sheeperapp',
  ],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: siteName,
  url: siteUrl,
  description:
    'Cartões de fidelização digital para espaços em Lisboa. Sheeper: carimbos e recompensas na app.',
  inLanguage: 'pt-PT',
  publisher: { '@id': orgId },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: siteName,
  url: siteUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android',
  downloadUrl: appStoreUrl,
  installUrl: playStoreUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  description:
    'Cartões de fidelização digital para clientes habituais. Carimbos e recompensas na app Sheeper.',
  publisher: { '@id': orgId },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
    </>
  );
}
