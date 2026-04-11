import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import css from './page.module.css';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/400-italic.css';
import { NavBar } from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Providers } from './providers';
import { OrganizationJsonLd } from './components/OrganizationJsonLd';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import {
  defaultLocale,
  defaultOgImagePath,
  defaultOgImageSize,
  siteName,
  siteUrl,
} from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Cartões de fidelização digital para espaços em Lisboa`,
    template: `%s | ${siteName}`,
  },
  description:
    'Atraia clientes que voltam: cartões de fidelização digital na app Sheeper. Para restaurantes e cafés em Lisboa — carimbos, recompensas, sem papel.',
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: siteUrl,
    siteName,
    title: `${siteName} — Fidelização digital em Lisboa`,
    description:
      'Cartões de fidelização digital para o seu espaço. Carimbos e recompensas na app Sheeper.',
    images: [
      {
        url: defaultOgImagePath,
        width: defaultOgImageSize.width,
        height: defaultOgImageSize.height,
        alt: 'Sheeper — cartões de fidelização digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Fidelização digital em Lisboa`,
    description:
      'Cartões de fidelização digital para restaurantes e cafés. Clientes que voltam com a app Sheeper.',
    images: [`${siteUrl}${defaultOgImagePath}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <OrganizationJsonLd />
        <Providers>
          <div className={css.navbar}>
            <NavBar />
          </div>
          {children}
          <Footer />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}
