'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/app/components/ContactForm/ContactForm';
import css from './ContactSection.module.css';

export function ContactSection() {
  const { t } = useTranslation('common');

  return (
    <motion.section
      id="contact"
      className={css.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={css.title}>{t('contact.title')}</h2>
      <p className={css.description}>{t('contact.description')}</p>
      <ContactForm />
    </motion.section>
  );
}
