'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import css from './ForBusinessesSection.module.css';

export function ForBusinessesSection() {
  const { t } = useTranslation('common');

  return (
    <motion.section
      id="for-businesses"
      className={css.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className={css.sectionTitle}>{t('for_businesses_section.title')}</h2>
      <div className={css.grid}>
        <article className={css.card}>
          <div className={css.cardImageWrap} aria-hidden="true">
            <Image
              src="/loyalty.jpeg"
              alt=""
              width={560}
              height={280}
              className={css.cardImage}
              sizes="(max-width: 768px) 100vw, 26rem"
            />
          </div>
          <h3 className={css.cardTitle}>{t('for_businesses_section.loyalty_title')}</h3>
          <p className={css.cardText}>{t('for_businesses_section.loyalty_text')}</p>
        </article>
        <article className={css.card}>
          <div className={css.cardImageWrap} aria-hidden="true">
            <Image
              src="/loyalty_card_section.png"
              alt=""
              width={560}
              height={320}
              className={css.cardImage}
              sizes="(max-width: 768px) 100vw, 26rem"
            />
          </div>
          <h3 className={css.cardTitle}>{t('for_businesses_section.digital_title')}</h3>
          <p className={css.cardText}>{t('for_businesses_section.digital_text')}</p>
        </article>
      </div>
    </motion.section>
  );
}
