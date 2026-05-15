import { DEFAULT_LOCATION, sheeperApiUrl } from './config';
import { transformLoyaltyCard, transformLoyaltyCards } from './transform';
import type { LoyaltyCard, LoyaltyCardApi, PaginatedLoyaltyCards } from './types';

type LoyaltyQuery = {
  lang?: string;
  latitude?: number;
  longitude?: number;
};

function loyaltySearchParams({ lang = 'pt', latitude, longitude }: LoyaltyQuery = {}) {
  const params = new URLSearchParams();
  params.set('lang', lang);
  params.set('latitude', String(latitude ?? DEFAULT_LOCATION.latitude));
  params.set('longitude', String(longitude ?? DEFAULT_LOCATION.longitude));
  return params;
}

async function parseJsonResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const preview = await res.text().catch(() => '');
    throw new Error(`sheeper_api_${res.status}:${preview.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchPublicLoyaltyCards(query: LoyaltyQuery = {}): Promise<LoyaltyCard[]> {
  const params = loyaltySearchParams(query);
  const res = await fetch(`${sheeperApiUrl('/loyalty-cards/public/')}?${params}`, {
    next: { revalidate: 60 },
  });
  const data = await parseJsonResponse<PaginatedLoyaltyCards | LoyaltyCardApi[]>(res);
  if (Array.isArray(data)) return transformLoyaltyCards(data);
  return transformLoyaltyCards(data.results);
}

export async function fetchLoyaltyCard(
  id: string,
  query: LoyaltyQuery = {}
): Promise<LoyaltyCard | null> {
  const params = loyaltySearchParams(query);
  const res = await fetch(`${sheeperApiUrl(`/loyalty-cards/${id}/`)}?${params}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  const data = await parseJsonResponse<LoyaltyCardApi>(res);
  return transformLoyaltyCard(data);
}
