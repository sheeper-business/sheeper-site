import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Para negócios — cartões de fidelização Sheeper',
  description:
    'Fidelização digital para restaurantes e cafés em Lisboa. Ofereça carimbos e recompensas com a Sheeper — contacte-nos.',
  alternates: { canonical: '/establishments' },
};

export default function EstablishmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
