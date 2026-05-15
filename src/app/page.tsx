import type { Metadata } from 'next';
import { Home } from './home/Home';
import {
  defaultLocale,
  defaultOgImagePath,
  defaultOgImageSize,
  siteName,
  siteUrl,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: `${siteName} — Cartões de fidelização digital para o seu espaço`,
  description:
    'Quer clientes que regressem? A Sheeper oferece cartões de fidelização digital que as pessoas usam na app — para restaurantes e cafés em Lisboa. Carimbos, recompensas e menos papel.',
  keywords: [
    'fidelização digital',
    'cartão fidelização Lisboa',
    'restaurantes Lisboa',
    'app fidelização',
    'Sheeper',
    'loyalty card',
    'carimbos digitais',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: siteUrl,
    siteName,
    title: `${siteName} — Clientes que voltam com fidelização digital`,
    description:
      'Cartões de fidelização na app Sheeper: carimbos, recompensas e mais visitas ao seu espaço em Lisboa.',
    images: [
      {
        url: defaultOgImagePath,
        width: defaultOgImageSize.width,
        height: defaultOgImageSize.height,
        alt: 'Sheeper — cartões de fidelização digital na app',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Fidelização digital em Lisboa`,
    description:
      'Cartões de fidelização digital para restaurantes e cafés. Mais clientes habituais com a app Sheeper.',
    images: [`${siteUrl}${defaultOgImagePath}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Home />;
}
