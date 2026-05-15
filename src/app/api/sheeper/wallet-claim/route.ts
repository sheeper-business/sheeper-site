import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { proxySheeperRequest } from '@/lib/sheeper/proxy';

const claimSchema = yup.object({
  first_name: yup.string().trim().min(1).max(100).required(),
  last_name: yup.string().trim().min(1).max(100).required(),
  email: yup.string().trim().email().max(320).required(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = await claimSchema.validate(json, { abortEarly: false });
    return proxySheeperRequest('/api/user/wallet-claim/', {
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
