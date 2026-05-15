import Link from 'next/link';
import Image from 'next/image';
import { isSmallFranchiseLogoUrl } from '@/lib/sheeper/images';
import type { LoyaltyCard } from '@/lib/sheeper/types';
import { loyaltyCardHref } from '@/lib/sheeper/slug';
import css from './loyalty-cards.module.css';

type Props = {
  card: LoyaltyCard;
  allCards: LoyaltyCard[];
  stampsLabel: string;
};

export function LoyaltyCardTile({ card, allCards, stampsLabel }: Props) {
  const imageSrc = card.mainImage || '/loyalty_card_section.png';
  const smallLogo = isSmallFranchiseLogoUrl(card.mainImage);

  return (
    <Link href={loyaltyCardHref(card, allCards)} className={css.tile} prefetch>
      <div className={smallLogo ? `${css.tileImageWrap} ${css.tileImageWrapLogo}` : css.tileImageWrap}>
        <Image
          src={imageSrc}
          alt={card.establishmentName}
          fill
          className={smallLogo ? `${css.tileImage} ${css.tileImageLogo}` : css.tileImage}
          sizes="(max-width: 768px) 100vw, 320px"
          unoptimized={imageSrc.startsWith('http')}
        />
      </div>
      <div className={css.tileBody}>
        <span className={css.tileName}>{card.establishmentName}</span>
        {card.reward ? <span className={css.tileReward}>{card.reward}</span> : null}
        {card.requiredStamps > 0 ? (
          <span className={css.tileMeta}>{stampsLabel}</span>
        ) : null}
      </div>
    </Link>
  );
}
