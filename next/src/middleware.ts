import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/lesson') {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    const isValidToken = await verifyTokenWithMailerLite(token);

    if (!isValidToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/lesson'],
};

const verifyTokenWithMailerLite = async (token: string): Promise<boolean> => {
  try {
    const res = await fetch(`https://api.mailerlite.com/api/v2/subscribers/search?query=${token}`, {
      headers: {
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY!,
        'Content-Type': 'application/json',
      },
    });

    const response = await res.json();

    const subscriber = response.find((sub: { fields: { user_token: string } }) => sub.fields.user_token === token);

    return !!subscriber;
  } catch (error) {
    console.error('Wystąpił problem z weryfikacją tokenu', error);
    return false;
  }
};
