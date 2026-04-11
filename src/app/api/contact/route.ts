import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

const contactSchema = yup.object({
  name: yup.string().trim().min(1).max(200).required(),
  email: yup.string().trim().email().max(320).required(),
  company: yup.string().trim().max(200).optional(),
  message: yup.string().trim().min(10).max(5000).required(),
  website: yup.string().optional(),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Resend returns different error shapes depending on API version / status code */
function formatResendError(err: unknown): string {
  if (err == null) return 'Unknown error from email provider';
  if (typeof err === 'string') return err;
  if (typeof err !== 'object') return String(err);
  const o = err as Record<string, unknown>;
  if (typeof o.message === 'string') return o.message;
  if (Array.isArray(o.message)) return o.message.map(String).join('; ');
  if (typeof o.name === 'string' && o.message === undefined) return o.name;
  try {
    return JSON.stringify(err);
  } catch {
    return 'Unknown error from email provider';
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = await contactSchema.validate(json, { abortEarly: false });

    if (data.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.CONTACT_TO_EMAIL ?? 'sheeper.business@gmail.com';

    if (!apiKey || !from) {
      const missing = [!apiKey && 'RESEND_API_KEY', !from && 'RESEND_FROM'].filter(Boolean).join(', ');
      console.error('[api/contact] Missing env:', missing);
      return NextResponse.json(
        {
          error: 'Failed to send',
          reason: `Server misconfiguration: set ${missing} on your host (e.g. Vercel → Environment Variables).`,
        },
        { status: 503 }
      );
    }

    const textBody = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company / venue: ${data.company}` : null,
      '',
      'Message:',
      data.message,
    ]
      .filter(Boolean)
      .join('\n');

    const resend = new Resend(apiKey);

    let result: Awaited<ReturnType<typeof resend.emails.send>>;
    try {
      result = await resend.emails.send({
        from,
        to: [to],
        replyTo: data.email,
        subject: `Sheeper website: message from ${data.name}`,
        text: textBody,
        html: `
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.company ? `<p><strong>Company / venue:</strong> ${escapeHtml(data.company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
      });
    } catch (e) {
      const reason = e instanceof Error ? e.message : String(e);
      console.error('[api/contact] Resend threw:', reason);
      return NextResponse.json({ error: 'Failed to send', reason }, { status: 502 });
    }

    if (result.error) {
      const reason = formatResendError(result.error);
      console.error('[api/contact] Resend error:', reason);
      return NextResponse.json({ error: 'Failed to send', reason }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof yup.ValidationError) {
      return NextResponse.json({ error: 'Validation failed', reason: e.errors.join(', ') }, { status: 400 });
    }
    const reason = e instanceof Error ? e.message : String(e);
    console.error('[api/contact]', e);
    return NextResponse.json({ error: 'Failed to send', reason }, { status: 400 });
  }
}
