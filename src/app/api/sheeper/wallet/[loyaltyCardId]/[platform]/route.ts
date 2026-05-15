import { NextResponse } from 'next/server';
import { proxySheeperRequest } from '@/lib/sheeper/proxy';
import type { WalletPlatform } from '@/lib/sheeper/types';

type RouteContext = {
  params: { loyaltyCardId: string; platform: string };
};

function isWalletPlatform(value: string): value is WalletPlatform {
  return value === 'ios' || value === 'android';
}

export async function POST(request: Request, { params }: RouteContext) {
  const { loyaltyCardId, platform } = params;

  if (!/^\d+$/.test(loyaltyCardId)) {
    return NextResponse.json({ error: 'Invalid loyalty card id' }, { status: 400 });
  }
  if (!isWalletPlatform(platform)) {
    return NextResponse.json({ error: 'Platform must be ios or android' }, { status: 400 });
  }

  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Token ')) {
    return NextResponse.json({ error: 'Authorization token required' }, { status: 401 });
  }

  return proxySheeperRequest(`/wallet/${loyaltyCardId}/${platform}/`, {
    method: 'POST',
    headers: {
      Authorization: auth,
      Accept: 'application/json, application/vnd.apple.pkpass, application/octet-stream, */*',
    },
  });
}
