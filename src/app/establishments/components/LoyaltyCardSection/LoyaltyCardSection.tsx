import React, { useState } from 'react';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LoyaltyCardSection() {
  const { t } = useTranslation('common');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className={css.loyaltyCardSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={css.loyaltyCardImageContainer}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, 0, -1, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Image
            src={'/loyalty_card_section.png'}
            width={592}
            height={663}
            alt="Sheeper digital loyalty card for businesses"
            priority
            className={`${imageLoaded ? css.imageLoaded : css.imageLoading}`}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className={css.textContainerLoyaltyCardSection}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={css.buttonContainerDesktop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AppButton type="button" variant="contained" href="/#contact" color="primary">
            {t('establishmentsPage.form_link_button')}
          </AppButton>
        </motion.div>

        <motion.h1
          className={css.loyaltyCardSectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('establishmentsPage.loyaltyCardSection.title')}
        </motion.h1>

        <motion.p
          className={css.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('establishmentsPage.loyaltyCardSection.description')}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}