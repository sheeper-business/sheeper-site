import type { LoyaltyCard } from '@/lib/sheeper/types';
import css from './loyalty-card.module.css';

type Props = {
  card: LoyaltyCard;
  stampsLabel: string;
  rewardLabel: string;
};

export function LoyaltyCardPreview({ card, stampsLabel, rewardLabel }: Props) {
  const filled = Math.min(card.stamps, card.requiredStamps);
  const total = Math.min(card.requiredStamps, 20);
  const progress = total > 0 ? Math.round((filled / total) * 100) : 0;

  return (
    <article
      className={css.card}
      style={{
        backgroundColor: card.backgroundColor,
        color: card.textColor,
        ['--card-accent' as string]: card.foregroundColor,
      }}
    >
      <div className={css.cardTop}>
        {card.mainImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.mainImage} alt="" className={css.establishmentImage} />
        ) : (
          <div className={css.establishmentPlaceholder} aria-hidden />
        )}
        <div className={css.cardTopText}>
          <p className={css.cardEyebrow}>Cartão de fidelização</p>
          <h1 className={css.establishmentName}>{card.establishmentName}</h1>
          {card.distance ? (
            <p className={css.cardDistance}>{formatDistance(card.distance)}</p>
          ) : null}
        </div>
      </div>

      {card.reward ? (
        <RewardBlock card={card} rewardLabel={rewardLabel} />
      ) : null}

      {total > 0 ? (
        <div className={css.stampsPanel}>
          <div className={css.stampsHeader}>
            <span className={css.stampsLabel}>{stampsLabel}</span>
            <span className={css.stampsPercent}>{progress}%</span>
          </div>
          <div
            className={css.progressTrack}
            style={{ color: card.foregroundColor }}
            role="progressbar"
            aria-valuenow={filled}
            aria-valuemin={0}
            aria-valuemax={total}
          >
            <div className={css.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={css.stampsRow} style={{ color: card.foregroundColor }}>
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={`${css.dot} ${i < filled ? css.dotFilled : ''}`}
                aria-hidden
              >
                {i < filled ? '✓' : ''}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {card.termsAndConditions ? <p className={css.terms}>{card.termsAndConditions}</p> : null}
    </article>
  );
}

function RewardBlock({ card, rewardLabel }: { card: LoyaltyCard; rewardLabel: string }) {
  return (
    <div className={css.rewardBox}>
      <div className={css.rewardContent}>
        <span className={css.rewardLabel}>{rewardLabel}</span>
        <p className={css.rewardTitle}>{card.reward}</p>
      </div>
      {card.rewardImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.rewardImage} alt="" className={css.rewardImage} />
      ) : null}
    </div>
  );
}

function formatDistance(distance: number | string): string {
  if (typeof distance === 'string') return distance;
  if (distance < 1) return `${Math.round(distance * 1000)} m`;
  return `${distance.toFixed(1)} km`;
}
