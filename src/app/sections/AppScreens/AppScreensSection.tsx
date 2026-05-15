'use client';

import React, { useState } from 'react';
import css from './AppScreensSection.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const AppScreensSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      className={css.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h5
        style={{ textAlign: 'center', width: '80%', fontSize: '3rem' }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('app_screens.title')}
      </motion.h5>
      <motion.p
        style={{
          textAlign: 'center',
          width: '85%',
          maxWidth: '40rem',
          margin: '0.75rem auto 2rem',
          fontSize: '1.15rem',
          lineHeight: 1.5,
          color: 'rgba(0,0,0,0.72)',
        }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('app_screens.subtitle')}
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/app-screens.png"
          alt="Sheeper app screens — loyalty cards and stamps"
          width={1132}
          height={686}
          className={`${imageLoaded ? css.imageLoaded : css.imageLoading}`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </motion.div>
  );
};
