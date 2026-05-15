const TOKEN_KEY = 'sheeper_wallet_token';
const PROFILE_KEY = 'sheeper_wallet_profile';

export type WalletProfile = {
  first_name: string;
  last_name: string;
  email: string;
};

export function getWalletToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setWalletSession(token: string, profile: WalletProfile): void {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getWalletProfile(): WalletProfile | null {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(PROFILE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as WalletProfile;
  } catch {
    return null;
  }
}

export function clearWalletSession(): void {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(PROFILE_KEY);
}
