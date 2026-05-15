'use client';

import { useCallback, useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { openWalletFromResponse } from '@/lib/sheeper/wallet';
import type { WalletPlatform } from '@/lib/sheeper/types';
import css from './loyalty-card.module.css';

type Props = {
  loyaltyCardId: number;
  sessionToken: string;
  labels: {
    title: string;
    lead: string;
    appleWallet: string;
    googleWallet: string;
    walletError: string;
  };
};

export function WalletActions({ loyaltyCardId, sessionToken, labels }: Props) {
  const [walletLoading, setWalletLoading] = useState<WalletPlatform | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addToWallet = useCallback(
    async (platform: WalletPlatform) => {
      setWalletLoading(platform);
      setErrorMessage(null);
      try {
        const res = await fetch(`/api/sheeper/wallet/${loyaltyCardId}/${platform}`, {
          method: 'POST',
          headers: { Authorization: `Token ${sessionToken}` },
        });
        if (!res.ok) {
          const text = await res.text().catch(() => '');
          setErrorMessage(text.slice(0, 200) || labels.walletError);
          return;
        }
        await openWalletFromResponse(res, loyaltyCardId);
      } catch {
        setErrorMessage(labels.walletError);
      } finally {
        setWalletLoading(null);
      }
    },
    [loyaltyCardId, labels.walletError, sessionToken]
  );

  return (
    <section className={css.walletSection} aria-labelledby="wallet-heading">
      <h2 id="wallet-heading" className={css.walletTitle}>
        {labels.title}
      </h2>
      <p className={css.walletLead}>{labels.lead}</p>

      <div className={css.walletButtons}>
        <AppButton
          type="button"
          variant="contained"
          color="primary"
          className={css.walletButton}
          isLoading={walletLoading === 'ios'}
          onClick={() => addToWallet('ios')}
          startIcon={<FaApple className={css.walletIconApple} aria-hidden />}
        >
          {labels.appleWallet}
        </AppButton>
        <AppButton
          type="button"
          variant="outlined"
          color="primary"
          className={css.walletButton}
          isLoading={walletLoading === 'android'}
          onClick={() => addToWallet('android')}
          startIcon={<SiGoogle className={css.walletIconGoogle} aria-hidden />}
        >
          {labels.googleWallet}
        </AppButton>
      </div>

      {errorMessage ? (
        <p className={`${css.status} ${css.statusError}`} role="alert">
          {errorMessage}
        </p>
      ) : null}
    </section>
  );
}
