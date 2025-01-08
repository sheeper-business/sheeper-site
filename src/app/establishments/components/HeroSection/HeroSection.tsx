import React from 'react';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <div className={css.container}>
      <div className={css.textContainerHeroSection}>
        <h1 className={css.title}>{t('establishmentsPage.title')}</h1>
        <p className={css.description}>{t('establishmentsPage.description')}</p>
        <div className={css.buttonContainer}>
          <AppButton
            type="button"
            variant="contained"
            href="https://oiatg37ji32.typeform.com/to/i8HpBOjV"
            formTarget="_blank"
            color="primary"
          >
            {t('establishmentsPage.form_link_button')}
          </AppButton>
        </div>
      </div>
      <div className={css.imageContainerHeroSection}>
        <Image src={'/establishments_hero.png'} width={715} height={582} alt="Establishments" />
      </div>
    </div>
  );
}
