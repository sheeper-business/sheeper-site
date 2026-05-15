import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { fetchPublicLoyaltyCards } from '@/lib/sheeper/api';
import {
  findCardBySlug,
  loyaltyCardSlug,
  parseLoyaltyCardIdFromSlug,
} from '@/lib/sheeper/slug';
import { LoyaltyCardPageClient } from './LoyaltyCardPageClient';

type PageProps = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: 'Cartão de fidelização',
  description: 'Adicione o cartão de fidelização Sheeper à sua carteira digital.',
};

export default async function LoyaltyCardPage({ params }: PageProps) {
  const rawSlug = params.slug;
  const decoded = decodeURIComponent(rawSlug).trim().toLowerCase();
  const cardIdFromSlug = parseLoyaltyCardIdFromSlug(rawSlug);

  const cards = await fetchPublicLoyaltyCards({ lang: 'pt' });
  const match =
    cardIdFromSlug != null
      ? cards.find((c) => c.id === cardIdFromSlug)
      : findCardBySlug(cards, rawSlug);

  if (!match) notFound();

  const canonical = loyaltyCardSlug(match, cards);
  if (canonical !== decoded) {
    redirect(`/loyalty-card/${canonical}`);
  }

  return <LoyaltyCardPageClient cardId={match.id} previewCard={match} />;
}
