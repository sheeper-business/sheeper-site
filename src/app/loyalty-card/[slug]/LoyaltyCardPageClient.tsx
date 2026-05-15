'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchLoyaltyCardByIdClient } from '@/lib/sheeper/client';
import type { LoyaltyCard } from '@/lib/sheeper/types';
import { getWalletToken, type WalletProfile } from '@/lib/sheeper/session';
import { WalletAccessGate } from '@/app/loyalty-cards/WalletAccessGate';
import { LoyaltyCardPreview } from './LoyaltyCardPreview';
import { WalletActions } from './WalletActions';
import css from './loyalty-card.module.css';
import gateCss from '@/app/loyalty-cards/loyalty-cards.module.css';

const copy = {
  gate: {
    title: 'Identifique-se',
    lead: 'Preencha os seus dados para adicionar o cartão à carteira do telemóvel.',
    firstName: 'Nome',
    lastName: 'Apelido',
    email: 'Email',
    submit: 'Continuar',
    error: 'Não foi possível validar os seus dados. Verifique o email e tente novamente.',
  },
  back: '← Todos os cartões',
  rewardLabel: 'A sua recompensa',
  stamps: (current: number, required: number) => `${current} de ${required} carimbos`,
  loadingStamps: 'A atualizar os seus carimbos…',
  loadError: 'Não foi possível carregar o seu progresso. Pode mesmo assim adicionar à carteira.',
  wallet: {
    title: 'Adicionar à carteira',
    lead: 'Escolha Apple Wallet ou Google Wallet.',
    appleWallet: 'Apple Wallet',
    googleWallet: 'Google Wallet',
    walletError: 'Não foi possível obter o passe da carteira.',
  },
};

type Props = {
  cardId: number;
  previewCard: LoyaltyCard;
};

export function LoyaltyCardPageClient({ cardId, previewCard }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [card, setCard] = useState<LoyaltyCard | null>(null);
  const [loadState, setLoadState] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  const displayCard = card ?? previewCard;

  useEffect(() => {
    const stored = getWalletToken();
    if (stored) setToken(stored);
  }, []);

  const loadCard = useCallback(async (sessionToken: string) => {
    setLoadState('loading');
    try {
      const data = await fetchLoyaltyCardByIdClient(cardId, sessionToken);
      setCard(data);
      setLoadState('ready');
    } catch {
      setLoadState('error');
    }
  }, [cardId]);

  const onAuthenticated = useCallback((sessionToken: string, _profile: WalletProfile) => {
    setToken(sessionToken);
  }, []);

  useEffect(() => {
    if (token) void loadCard(token);
  }, [token, loadCard]);

  const t = copy;

  return (
    <main className={css.page}>
      <Link href="/loyalty-cards" className={css.back}>
        {t.back}
      </Link>

      <LoyaltyCardPreview
        card={displayCard}
        rewardLabel={t.rewardLabel}
        stampsLabel={t.stamps(displayCard.stamps, displayCard.requiredStamps)}
      />

      <div className={css.belowCard}>
        {token && loadState === 'loading' ? (
          <p className={css.statusLine}>{t.loadingStamps}</p>
        ) : null}

        {token && loadState === 'error' ? <p className={gateCss.error}>{t.loadError}</p> : null}

        {!token ? (
          <WalletAccessGate labels={t.gate} onAuthenticated={onAuthenticated} compact />
        ) : null}

        {token ? (
          <WalletActions loyaltyCardId={cardId} sessionToken={token} labels={t.wallet} />
        ) : null}
      </div>
    </main>
  );
}
