import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import SchemaOrganization from '@/global/Schema/Organization';
import { LOCALE } from '@/global/constants';
import { RedHatDisplay } from '@/global/fonts';
import '@/global/global.scss';
import CookieConsent from '@/components/global/CookieConsent';
import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LOCALE}>
      <body className={RedHatDisplay.className}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
        <CookieConsent />
        <SchemaOrganization />
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleTagManager gtmId='GTM-58CFBWW3' />}
    </html>
  );
}
