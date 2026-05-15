import type { Metadata } from 'next';
import { ContactForm } from '../components/ContactForm/ContactForm';
import css from './contacts.module.css';
import {
  defaultLocale,
  defaultOgImagePath,
  defaultOgImageSize,
  siteName,
  siteUrl,
} from '@/lib/seo';

const path = '/contacts';

export const metadata: Metadata = {
  title: 'Contactos',
  description:
    'Contacte a equipa Sheeper — dúvidas sobre fidelização digital, parcerias ou o seu espaço em Lisboa.',
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: `${siteUrl}${path}`,
    siteName,
    title: `Contactos | ${siteName}`,
    description:
      'Fale com a Sheeper sobre cartões de fidelização digital para o seu restaurante ou café.',
    images: [
      {
        url: defaultOgImagePath,
        width: defaultOgImageSize.width,
        height: defaultOgImageSize.height,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contactos — ${siteName}`,
    description: 'Envie uma mensagem à equipa Sheeper.',
    images: [`${siteUrl}${defaultOgImagePath}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactsPage() {
  return (
    <div className={css.container}>
      <div className={css.contactSection}>
        <h1>Contactos</h1>
        <p className={css.intro}>
          Email: sheeper.business@gmail.com · Telefone: +351 916 884 784
        </p>
        <div className={css.formCard}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
