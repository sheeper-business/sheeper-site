import type { LoyaltyCard, LoyaltyCardApi } from './types';
import { slugifyEstablishment } from './slug';

export function transformLoyaltyCard(card: LoyaltyCardApi): LoyaltyCard {
  const establishmentName = card.establishment_name ?? '';
  return {
    id: card.id,
    slug: slugifyEstablishment(establishmentName),
    establishmentName,
    mainImage: card.establishment_main_image ?? null,
    distance: card.establishment_distance ?? null,
    stamps: card.stamps ?? 0,
    requiredStamps: card.required_stamps ?? 0,
    reward: card.reward ?? '',
    backgroundColor: card.background_color || '#FFFFFF',
    foregroundColor: card.foreground_color || '#000000',
    textColor: card.text_color || '#000000',
    termsAndConditions: card.terms_and_conditions ?? null,
    expirationDate: card.expiration_date ?? null,
    rewardImage: card.reward_image ?? null,
    type: card.type,
  };
}

export function transformLoyaltyCards(data: LoyaltyCardApi[] | undefined): LoyaltyCard[] {
  if (!data?.length) return [];
  return data.map(transformLoyaltyCard);
}
