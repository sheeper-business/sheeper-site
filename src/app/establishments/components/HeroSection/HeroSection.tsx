import React, { useState } from 'react';
import css from '../../EstablishmentsPage.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useTranslation('common');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={css.container}>
      <motion.div
        className={css.textContainerHeroSection}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={css.description}>{t('establishmentsPage.alreadyAPartner')}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={'https://www.sheeperbusiness.app/login'} className={css.loginHere}>
              {t('establishmentsPage.loginHere')}
            </Link>
          </motion.div>
        </motion.div>

        <motion.h1
          className={css.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t('establishmentsPage.title')}
        </motion.h1>

        <motion.p
          className={css.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t('establishmentsPage.description')}
        </motion.p>

        <motion.div
          className={css.buttonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
      </motion.div>

      <motion.div
        className={css.imageContainerHeroSection}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={'/establishments_hero.png'}
            width={715}
            height={582}
            alt="Establishments"
            priority
            className={`${imageLoaded ? css.imageLoaded : css.imageLoading}`}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}