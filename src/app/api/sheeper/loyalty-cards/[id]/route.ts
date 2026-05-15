import { NextResponse } from 'next/server';
import { DEFAULT_LOCATION, sheeperApiUrl } from '@/lib/sheeper/config';

type RouteContext = { params: { id: string } };

export async function GET(request: Request, { params }: RouteContext) {
  if (!/^\d+$/.test(params.id)) {
    return NextResponse.json({ detail: 'Invalid id' }, { status: 400 });
  }

  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Token ')) {
    return NextResponse.json(
      { detail: 'Authentication credentials were not provided.' },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') ?? 'pt';
  const latitude = searchParams.get('latitude') ?? String(DEFAULT_LOCATION.latitude);
  const longitude = searchParams.get('longitude') ?? String(DEFAULT_LOCATION.longitude);
  const query = new URLSearchParams({ lang, latitude, longitude });

  const upstream = await fetch(`${sheeperApiUrl(`/loyalty-cards/${params.id}/`)}?${query}`, {
    headers: { Authorization: auth },
    cache: 'no-store',
  });

  const body = await upstream.text();
  return new NextResponse(body, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('content-type') ?? 'application/json' },
  });
}
