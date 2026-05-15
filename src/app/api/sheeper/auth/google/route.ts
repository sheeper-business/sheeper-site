import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { proxySheeperRequest } from '@/lib/sheeper/proxy';

const schema = yup.object({
  token: yup.string().trim().min(1).required(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = await schema.validate(json, { abortEarly: false });
    return proxySheeperRequest('/api/user/google-token/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (e) {
    if (e instanceof yup.ValidationError) {
      return NextResponse.json({ error: 'Validation failed', reason: e.errors.join(', ') }, { status: 400 });
    }
    const reason = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: 'Request failed', reason }, { status: 400 });
  }
}
