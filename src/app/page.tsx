import type { Metadata } from 'next';
import { Home } from './home/Home';

const site = 'https://www.sheeper.app';

export const metadata: Metadata = {
  title: 'Sheeper — Cartões de fidelização digitais em Lisboa',
  description:
    'Acumule carimbos e desbloqueie recompensas nos restaurantes e cafés de Lisboa. Cartões de fidelização digitais na app Sheeper.',
  keywords: [
    'Sheeper',
    'cartão fidelização Lisboa',
    'loyalty card Lisbon',
    'restaurantes Lisboa',
    'fidelização digital',
    'carimbos',
    'app restaurantes',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: site,
    siteName: 'Sheeper',
    title: 'Sheeper — Fidelização digital em Lisboa',
    description:
      'Cartões de fidelização digitais: carimbos, recompensas e os seus sítios favoritos na app Sheeper.',
    images: [
      {
        url: '/hero-phone.png',
        width: 300,
        height: 325,
        alt: 'Sheeper app no telemóvel — fidelização em Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheeper — Fidelização digital em Lisboa',
    description:
      'Cartões de fidelização digitais: carimbos e recompensas nos melhores sítios de Lisboa.',
    images: [`${site}/hero-phone.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Home />;
}
