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
      console.error('Missing RESEND_API_KEY or RESEND_FROM');
      return NextResponse.json({ error: 'Email not configured' }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Sheeper website: message from ${data.name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.company ? `<p><strong>Company / venue:</strong> ${escapeHtml(data.company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof yup.ValidationError) {
      return NextResponse.json({ error: e.errors.join(', ') }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
