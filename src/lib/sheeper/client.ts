import { transformLoyaltyCard, transformLoyaltyCards } from './transform';
import type { LoyaltyCard, LoyaltyCardApi, PaginatedLoyaltyCards, WalletClaimBody } from './types';
import { extractSessionToken } from './wallet';

export async function postWalletClaim(body: WalletClaimBody): Promise<string> {
  const res = await fetch('/api/sheeper/wallet-claim', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    const detail =
      typeof data.detail === 'string'
        ? data.detail
        : typeof data.reason === 'string'
          ? data.reason
          : 'Claim failed';
    throw new Error(detail);
  }
  const token = extractSessionToken(data);
  if (!token) throw new Error('No session token returned');
  return token;
}

export async function fetchPublicLoyaltyCardsClient(
  token: string | null,
  lang = 'pt'
): Promise<LoyaltyCard[]> {
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Token ${token}`;

  const res = await fetch(`/api/sheeper/loyalty-cards/public?lang=${lang}`, { headers });
  const data = (await res.json().catch(() => ({}))) as unknown;
  if (!res.ok) {
    const detail =
      typeof data === 'object' && data && 'detail' in data && typeof (data as { detail: unknown }).detail === 'string'
        ? (data as { detail: string }).detail
        : 'Failed to load cards';
    throw new Error(detail);
  }
  const parsed = data as PaginatedLoyaltyCards | LoyaltyCardApi[];
  if (Array.isArray(parsed)) return transformLoyaltyCards(parsed);
  return transformLoyaltyCards(parsed.results);
}

export async function fetchLoyaltyCardByIdClient(
  id: number,
  token: string,
  lang = 'pt'
): Promise<LoyaltyCard> {
  const res = await fetch(`/api/sheeper/loyalty-cards/${id}?lang=${lang}`, {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 404) throw new Error('not_found');
  const data = (await res.json().catch(() => ({}))) as LoyaltyCardApi & { detail?: string };
  if (!res.ok) {
    throw new Error(data.detail ?? 'Failed to load card');
  }
  return transformLoyaltyCard(data);
}
