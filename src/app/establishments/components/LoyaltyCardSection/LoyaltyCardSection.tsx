import React from 'react';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function LoyaltyCardSection() {
  const { t } = useTranslation('common');

  return (
    <div className={css.loyaltyCardSection}>
      <div className={css.loyaltyCardImageContainer}>
        <Image
          src={'/loyalty_card_section.png'}
          width={592}
          height={663}
          alt="Establishments"
          layout="responsive"
        />
      </div>
      <div className={css.textContainerLoyaltyCardSection}>
        <div className={css.buttonContainerDesktop}>
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
        <h1 className={css.loyaltyCardSectionTitle}>
          {t('establishmentsPage.loyaltyCardSection.title')}
        </h1>
        <p className={css.description}>{t('establishmentsPage.loyaltyCardSection.description')}</p>
      </div>
    </div>
  );
}
