import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { removeHtmlTags } from '@/utils/remove-html-tags';
import { REGEX } from '@/global/constants';
import type { RequestTypes } from './route.types';

const resend = new Resend(process.env.RESEND_API_TOKEN);

export async function POST(request: Request) {
  const req = (await request.json()) as RequestTypes;
  const { email, message, legal } = req;

  const isValid = email && REGEX.email.test(email) && message && legal;

  if (!isValid) return NextResponse.json({ success: false }, { status: 422 });

  const body = [
    `<p>Adres e-mail: <b>${email}</b></p>`,
    `<p>${message.trim()}</p>`,
    '<br />',
    '<br />',
    '<p><em>Wyrażono zgodnę na politykę prywatności</em></p>',
  ].join('');

  try {
    await resend.emails.send({
      from: `${email} przez Formularz <formularz@laik-knows.pl>`,
      to: 'oliwier@kryptonum.eu',
      reply_to: email,
      subject: `${email} przesyła wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
