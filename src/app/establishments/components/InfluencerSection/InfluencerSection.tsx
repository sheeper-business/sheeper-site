import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { motion, useInView } from 'framer-motion';

export default function InfluencerSection() {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', // Full viewport width
      }}
    >
      <motion.div
        className={css.influencerSection}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          style={{ flex: 1, flexWrap: 'wrap' }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className={css.influencerSectionTitle}
            style={{ marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('establishmentsPage.influencerSection.title')}
          </motion.h1>

          <motion.p
            className={css.description}
            style={{ marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('establishmentsPage.influencerSection.description')}
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AppButton
              type="button"
              variant="contained"
              href="https://oiatg37ji32.typeform.com/to/i8HpBOjV"
              formTarget="_blank"
              color="primary"
            >
              {t('establishmentsPage.form_link_button')}
            </AppButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ width: 'auto', margin: 'auto', maxWidth: '400px' }}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.video
            src="/influencer_video.mp4"
            controls
            style={{
              width: '100%', // Fill the available space in the container
              height: 'auto', // Maintain aspect ratio
              borderRadius: '12px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for aesthetics
            }}
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}