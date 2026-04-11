'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/app/components/AppButton/AppButton';
import css from './ContactForm.module.css';

const schema = yup.object({
  name: yup.string().trim().min(1).max(200).required(),
  email: yup.string().trim().email().max(320).required(),
  company: yup.string().trim().max(200).optional(),
  message: yup.string().trim().min(10).max(5000).required(),
  website: yup.string().optional(),
});

export type ContactFormValues = yup.InferType<typeof schema>;

export function ContactForm() {
  const { t } = useTranslation('common');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', company: '', message: '', website: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={css.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className={css.field}>
        <label htmlFor="contact-name">{t('contact.name')}</label>
        <input id="contact-name" type="text" autoComplete="name" {...register('name')} />
        {errors.name && <span className={css.fieldError}>{errors.name.message}</span>}
      </div>

      <div className={css.field}>
        <label htmlFor="contact-email">{t('contact.email')}</label>
        <input id="contact-email" type="email" autoComplete="email" {...register('email')} />
        {errors.email && <span className={css.fieldError}>{errors.email.message}</span>}
      </div>

      <div className={css.field}>
        <label htmlFor="contact-company">{t('contact.company')}</label>
        <input id="contact-company" type="text" autoComplete="organization" {...register('company')} />
        {errors.company && <span className={css.fieldError}>{errors.company.message}</span>}
      </div>

      <div className={css.field}>
        <label htmlFor="contact-message">{t('contact.message')}</label>
        <textarea id="contact-message" rows={5} {...register('message')} />
        {errors.message && <span className={css.fieldError}>{errors.message.message}</span>}
      </div>

      {status === 'success' && <p className={css.bannerSuccess}>{t('contact.success')}</p>}
      {status === 'error' && <p className={css.bannerError}>{t('contact.error')}</p>}

      <AppButton type="submit" variant="contained" color="primary" disabled={status === 'loading'}>
        {status === 'loading' ? t('contact.sending') : t('contact.submit')}
      </AppButton>
    </form>
  );
}
