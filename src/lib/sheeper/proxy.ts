import { NextResponse } from 'next/server';
import { sheeperApiUrl } from './config';

export async function proxySheeperRequest(
  upstreamPath: string,
  init: RequestInit & { method?: string }
): Promise<NextResponse> {
  const url = sheeperApiUrl(upstreamPath);
  const headers = new Headers(init.headers);

  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const upstream = await fetch(url, {
    ...init,
    headers,
  });

  const contentType = upstream.headers.get('content-type') || 'application/json';
  const body = await upstream.arrayBuffer();

  return new NextResponse(body, {
    status: upstream.status,
    headers: {
      'Content-Type': contentType,
    },
  });
}
