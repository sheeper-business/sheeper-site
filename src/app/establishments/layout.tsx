import type { Metadata } from 'next';
import {
  defaultLocale,
  defaultOgImagePath,
  defaultOgImageSize,
  siteName,
  siteUrl,
} from '@/lib/seo';

const path = '/establishments';

export const metadata: Metadata = {
  title: 'Para negócios — fidelização digital',
  description:
    'Ofereça um cartão de fidelização digital aos seus clientes em Lisboa. Sheeper: carimbos, recompensas e integração simples — fale connosco.',
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: `${siteUrl}${path}`,
    siteName,
    title: `Para negócios | ${siteName}`,
    description:
      'Fidelização digital para restaurantes e cafés: cartões na app Sheeper, mais visitas repetidas.',
    images: [
      {
        url: defaultOgImagePath,
        width: defaultOgImageSize.width,
        height: defaultOgImageSize.height,
        alt: 'Sheeper para negócios — fidelização digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Para negócios — ${siteName}`,
    description:
      'Cartões de fidelização digital para o seu espaço em Lisboa. Contacte a equipa Sheeper.',
    images: [`${siteUrl}${defaultOgImagePath}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EstablishmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
