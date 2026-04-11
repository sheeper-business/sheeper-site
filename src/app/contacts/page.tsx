import type { Metadata } from 'next';
import { ContactForm } from '../components/ContactForm/ContactForm';
import css from './contacts.module.css';

export const metadata: Metadata = {
  title: 'Contactos',
  description: 'Contacte a equipa Sheeper — cartões de fidelização digitais em Lisboa.',
  alternates: { canonical: '/contacts' },
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
