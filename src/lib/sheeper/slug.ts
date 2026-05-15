import type { LoyaltyCard } from './types';

/** URL-safe slug from establishment name (e.g. "Oh My Berry" → "oh-my-berry"). */
export function slugifyEstablishment(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Path segment for a loyalty card (`{slug}-{id}` — id allows instant lookup without listing all cards). */
export function loyaltyCardSlug(card: LoyaltyCard, _allCards?: LoyaltyCard[]): string {
  return `${card.slug}-${card.id}`;
}

/** Parse card id from `/loyalty-card/{slug}` when the segment ends with `-{id}` or is numeric. */
export function parseLoyaltyCardIdFromSlug(urlSlug: string): number | null {
  const decoded = decodeURIComponent(urlSlug).trim().toLowerCase();
  if (/^\d+$/.test(decoded)) return Number(decoded);
  const suffix = decoded.match(/-(\d+)$/);
  if (suffix) return Number(suffix[1]);
  return null;
}

export function loyaltyCardHref(card: LoyaltyCard, allCards: LoyaltyCard[]): string {
  return `/loyalty-card/${loyaltyCardSlug(card, allCards)}`;
}

/**
 * Resolve URL slug to a card from the public list.
 * Supports legacy numeric URLs (`/loyalty-card/14`) and disambiguated slugs (`oh-my-berry-14`).
 */
export function findCardBySlug(cards: LoyaltyCard[], urlSlug: string): LoyaltyCard | undefined {
  const decoded = decodeURIComponent(urlSlug).trim().toLowerCase();

  if (/^\d+$/.test(decoded)) {
    return cards.find((c) => c.id === Number(decoded));
  }

  const slugIdMatch = decoded.match(/^(.+)-(\d+)$/);
  if (slugIdMatch) {
    const [, slugPart, idPart] = slugIdMatch;
    const byId = cards.find((c) => c.id === Number(idPart));
    if (byId && byId.slug === slugPart) return byId;
  }

  const matches = cards.filter((c) => c.slug === decoded);
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) return matches[0];

  return undefined;
}
