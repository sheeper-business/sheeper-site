const DEFAULT_API_BASE = 'https://sheeper-api-boyf.onrender.com';

/** Set to true to show Google / Apple buttons on loyalty wallet gates. */
export const ENABLE_SOCIAL_SIGN_IN = false;

/** Server-side Sheeper API origin (no trailing slash). */
export function getSheeperApiBaseUrl(): string {
  const raw = process.env.SHEEPER_API_BASE_URL?.trim() || DEFAULT_API_BASE;
  return raw.replace(/\/$/, '');
}

export function sheeperApiUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getSheeperApiBaseUrl()}${normalized}`;
}

/** Default query for loyalty endpoints when the visitor has no GPS. */
export const DEFAULT_LOCATION = {
  latitude: 38.7223,
  longitude: -9.1393,
} as const;
