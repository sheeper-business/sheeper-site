'use client';

import { useMemo, useState } from 'react';
import type { LoyaltyCard } from '@/lib/sheeper/types';
import { LoyaltyCardTile } from './LoyaltyCardTile';
import css from './loyalty-cards.module.css';

const copy = {
  pt: {
    searchPlaceholder: 'Pesquisar por espaço ou recompensa',
    searchEmpty: 'Nenhum cartão corresponde à pesquisa.',
    stamps: (n: number) => `${n} carimbos para recompensa`,
  },
  en: {
    searchPlaceholder: 'Search by venue or reward',
    searchEmpty: 'No cards match your search.',
    stamps: (n: number) => `${n} stamps to reward`,
  },
} as const;

type Props = {
  cards: LoyaltyCard[];
  lang?: keyof typeof copy;
};

function formatStamps(n: number, lang: keyof typeof copy): string {
  return copy[lang].stamps(n);
}

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function cardMatchesQuery(card: LoyaltyCard, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  const haystack = normalize(`${card.establishmentName} ${card.reward}`);
  return haystack.includes(q);
}

export function LoyaltyCardsGrid({ cards, lang = 'pt' }: Props) {
  const labels = copy[lang];
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => cards.filter((card) => cardMatchesQuery(card, query)),
    [cards, query]
  );

  return (
    <>
      <div className={css.searchWrap}>
        <label htmlFor="loyalty-cards-search" className={css.searchLabel}>
          {labels.searchPlaceholder}
        </label>
        <input
          id="loyalty-cards-search"
          type="search"
          className={css.searchInput}
          placeholder={labels.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {filtered.length === 0 ? (
        <p className={css.searchEmpty}>{labels.searchEmpty}</p>
      ) : (
        <div className={css.grid}>
          {filtered.map((card) => (
            <LoyaltyCardTile
              key={card.id}
              card={card}
              allCards={cards}
              stampsLabel={formatStamps(card.requiredStamps, lang)}
            />
          ))}
        </div>
      )}
    </>
  );
}
