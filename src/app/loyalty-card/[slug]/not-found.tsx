import Link from 'next/link';
import css from './loyalty-card.module.css';

export default function LoyaltyCardNotFound() {
  return (
    <main className={css.page}>
      <h1 className={css.walletTitle}>Cartão não encontrado</h1>
      <p className={css.walletLead}>
        Este cartão de fidelização não existe ou já não está disponível publicamente.
      </p>
      <Link href="/loyalty-cards" className={css.back}>
        ← Ver todos os cartões
      </Link>
    </main>
  );
}
