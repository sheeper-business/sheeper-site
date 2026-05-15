import { extractSessionToken } from './wallet';
import type { WalletProfile } from './session';

export type AuthSession = {
  token: string;
  profile: WalletProfile;
};

function profileFromAuthBody(data: Record<string, unknown>): WalletProfile {
  return {
    first_name: typeof data.first_name === 'string' ? data.first_name : '',
    last_name: typeof data.last_name === 'string' ? data.last_name : '',
    email: typeof data.email === 'string' ? data.email : '',
  };
}

async function parseAuthResponse(res: Response): Promise<AuthSession> {
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    const detail =
      typeof data.detail === 'string'
        ? data.detail
        : typeof data.error === 'string'
          ? data.error
          : typeof data.reason === 'string'
            ? data.reason
            : 'Sign-in failed';
    throw new Error(detail);
  }
  const token = extractSessionToken(data);
  if (!token) throw new Error('No session token returned');
  return { token, profile: profileFromAuthBody(data) };
}

/** Same contract as the app: POST `{ token: googleIdToken }`. */
export async function postGoogleSignIn(idToken: string): Promise<AuthSession> {
  const res = await fetch('/api/sheeper/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: idToken }),
  });
  return parseAuthResponse(res);
}

/** Same contract as the app: POST apple credential fields. */
export async function postAppleSignIn(body: {
  id_token: string;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
}): Promise<AuthSession> {
  const res = await fetch('/api/sheeper/auth/apple', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseAuthResponse(res);
}
