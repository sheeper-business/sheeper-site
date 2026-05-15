/** Canonical site URL — must match production and next-sitemap.config.js */
export const siteUrl = 'https://www.sheeper.app' as const;

export const siteName = 'Sheeper';

/** Used for Open Graph / Twitter when a page does not set its own image */
export const defaultOgImagePath = '/loyaltyCards.png';

/** Recommended OG dimensions; social platforms will scale/crop the asset */
export const defaultOgImageSize = { width: 1200, height: 630 } as const;

export const appStoreUrl =
  'https://apps.apple.com/pt/app/sheeper/id6450721028' as const;
export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.sheeper.sheeper' as const;

/** Primary locale for metadata (site is PT-first; EN is in-app only) */
export const defaultLocale = 'pt_PT' as const;
