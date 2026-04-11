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

const inter = Inter({ subsets: ['latin'] });

const site = 'https://www.sheeper.app';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'Sheeper — Fidelização digital em Lisboa',
    template: '%s | Sheeper',
  },
  description:
    'Sheeper: cartões de fidelização digitais para restaurantes e cafés em Lisboa. Carimbos, recompensas e locais aderentes na app.',
  openGraph: {
    type: 'website',
    url: site,
    siteName: 'Sheeper',
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
