import type { Metadata } from 'next';
import { fetchPublicLoyaltyCards } from '@/lib/sheeper/api';
import { LoyaltyCardsGrid } from './LoyaltyCardsGrid';
import css from './loyalty-cards.module.css';

export const metadata: Metadata = {
  title: 'Cartões de fidelização',
  description:
    'Descubra cartões de fidelização digitais na Sheeper e adicione ao Apple Wallet ou Google Wallet.',
};

const copy = {
  pt: {
    title: 'Cartões de fidelização',
    lead: 'Escolha um espaço e adicione o cartão à carteira do telemóvel — sem precisar de conta na app.',
    empty: 'Não há cartões públicos disponíveis de momento.',
    error: 'Não foi possível carregar os cartões. Tente mais tarde.',
  },
  en: {
    title: 'Loyalty cards',
    lead: 'Pick a venue and add its card to your phone wallet — no Sheeper app account required.',
    empty: 'No public loyalty cards are available right now.',
    error: 'Could not load loyalty cards. Please try again later.',
  },
};

export default async function LoyaltyCardsPage() {
  const lang = 'pt';
  const t = copy[lang];

  let cards: Awaited<ReturnType<typeof fetchPublicLoyaltyCards>> = [];
  let loadError = false;

  try {
    cards = await fetchPublicLoyaltyCards({ lang });
  } catch {
    loadError = true;
  }

  return (
    <main className={css.page}>
      <h1 className={css.title}>{t.title}</h1>
      <p className={css.lead}>{t.lead}</p>

      {loadError ? <p className={css.error}>{t.error}</p> : null}

      {!loadError && cards.length === 0 ? <p className={css.empty}>{t.empty}</p> : null}

      {!loadError && cards.length > 0 ? (
        <LoyaltyCardsGrid cards={cards} lang={lang} />
      ) : null}
    </main>
  );
}
