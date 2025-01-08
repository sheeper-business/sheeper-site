import React from 'react';
import { useTranslation } from 'react-i18next';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';

export default function InfluencerSection() {
  const { t } = useTranslation('common');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', // Full viewport width
      }}
    >
      <div className={css.influencerSection}>
        <div style={{ flex: 1, flexWrap: 'wrap' }}>
          <h1 className={css.influencerSectionTitle} style={{ marginBottom: '1rem' }}>
            {t('establishmentsPage.influencerSection.title')}
          </h1>
          <p className={css.description} style={{ marginBottom: '1.5rem' }}>
            {t('establishmentsPage.influencerSection.description')}
          </p>
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
        <div style={{ width: 'auto', height: '600px', margin: 'auto', maxWidth: '400px' }}>
          <video
            src="/influencer_video.mp4"
            controls
            style={{
              width: '100%', // Fill the available space in the container
              height: 'auto', // Maintain aspect ratio
              borderRadius: '12px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for aesthetics
            }}
          ></video>
        </div>
      </div>
    </div>
  );
}
