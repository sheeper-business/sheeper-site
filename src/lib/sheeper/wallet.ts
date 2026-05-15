import type { AuthTokenResponse, WalletPlatform } from './types';

export function pickWalletUrlFromJson(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const record = data as Record<string, unknown>;
  const candidates = [
    record.url,
    record.wallet_url,
    record.save_url,
    record.add_to_wallet_url,
    record.addToWalletUrl,
  ];
  const found = candidates.find((v) => typeof v === 'string' && v.trim().length > 0);
  return found ? (found as string).trim() : null;
}

export function extractSessionToken(data: AuthTokenResponse): string | null {
  if (typeof data.token === 'string' && data.token.length > 0) return data.token;
  if (typeof data.key === 'string' && data.key.length > 0) return data.key;
  return null;
}

export function detectWalletPlatform(): WalletPlatform {
  if (typeof navigator === 'undefined') return 'ios';
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  return 'ios';
}

/** Open wallet save URL or download pass bytes in the browser. */
export async function openWalletFromResponse(
  response: Response,
  loyaltyCardId: number
): Promise<void> {
  const contentType = (response.headers.get('content-type') || '').toLowerCase();

  if (contentType.includes('application/json')) {
    const data = await response.json();
    const walletUrl = pickWalletUrlFromJson(data);
    if (!walletUrl) throw new Error('no_wallet_url');
    window.location.assign(walletUrl);
    return;
  }

  const buffer = await response.arrayBuffer();
  if (!buffer.byteLength) throw new Error('empty_wallet_response');

  if (!contentType.includes('vnd.apple.pkpass')) {
    try {
      const asText = new TextDecoder('utf-8').decode(new Uint8Array(buffer));
      const trimmed = asText.trim();
      if (trimmed.startsWith('{')) {
        const data = JSON.parse(trimmed) as unknown;
        const walletUrl = pickWalletUrlFromJson(data);
        if (walletUrl) {
          window.location.assign(walletUrl);
          return;
        }
      }
    } catch {
      /* binary pass */
    }
  }

  const isPkpass =
    contentType.includes('vnd.apple.pkpass') || detectWalletPlatform() === 'ios';
  const blob = new Blob([buffer], {
    type: isPkpass ? 'application/vnd.apple.pkpass' : 'application/octet-stream',
  });
  const blobUrl = URL.createObjectURL(blob);
  const ext = isPkpass ? 'pkpass' : 'bin';
  const anchor = document.createElement('a');
  anchor.href = blobUrl;
  anchor.download = `sheeper-loyalty-${loyaltyCardId}.${ext}`;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
}
