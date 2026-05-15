import { NextResponse } from 'next/server';
import { DEFAULT_LOCATION, sheeperApiUrl } from '@/lib/sheeper/config';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') ?? 'pt';
  const latitude = searchParams.get('latitude') ?? String(DEFAULT_LOCATION.latitude);
  const longitude = searchParams.get('longitude') ?? String(DEFAULT_LOCATION.longitude);

  const params = new URLSearchParams({ lang, latitude, longitude });
  const headers = new Headers();
  const auth = request.headers.get('Authorization');
  if (auth) headers.set('Authorization', auth);

  const upstream = await fetch(`${sheeperApiUrl('/loyalty-cards/public/')}?${params}`, {
    headers,
    cache: 'no-store',
  });

  const body = await upstream.text();
  return new NextResponse(body, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('content-type') ?? 'application/json' },
  });
}
