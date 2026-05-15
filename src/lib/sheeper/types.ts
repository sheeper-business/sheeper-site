export type LoyaltyCardApi = {
  id: number;
  status?: string;
  establishment_name?: string;
  establishment_main_image?: string | null;
  establishment_distance?: number | string | null;
  stamps?: number;
  required_stamps?: number;
  reward?: string;
  background_color?: string | null;
  foreground_color?: string | null;
  text_color?: string | null;
  terms_and_conditions?: string | null;
  expiration_date?: string | null;
  reward_image?: string | null;
  type?: string;
  points?: number;
  minimum_required_points?: number;
};

export type LoyaltyCard = {
  id: number;
  slug: string;
  establishmentName: string;
  mainImage: string | null;
  distance: number | string | null;
  stamps: number;
  requiredStamps: number;
  reward: string;
  backgroundColor: string;
  foregroundColor: string;
  textColor: string;
  termsAndConditions: string | null;
  expirationDate: string | null;
  rewardImage: string | null;
  type?: string;
};

export type PaginatedLoyaltyCards = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results: LoyaltyCardApi[];
};

export type WalletPlatform = 'ios' | 'android';

export type WalletClaimBody = {
  first_name: string;
  last_name: string;
  email: string;
};

export type AuthTokenResponse = {
  token?: string;
  key?: string;
  [key: string]: unknown;
};
