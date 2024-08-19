import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
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
        <Script async src='https://player.vimeo.com/api/player.js' strategy='beforeInteractive' />
      </body>
      {/* {process.env.NODE_ENV === 'production' && <GoogleTagManager gtmId='GTM-58CFBWW3' />} */}
      <GoogleTagManager gtmId='GTM-M6FZ4BW6' />
    </html>
  );
}
