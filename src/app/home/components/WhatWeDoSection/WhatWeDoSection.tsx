'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import css from './WhatWeDoSection.module.css';

const CARD_KEYS = ['blue', 'cream', 'coral'] as const;

export function WhatWeDoSection() {
  const { t } = useTranslation('common');

  const points = [t('what_we_do.point1'), t('what_we_do.point2'), t('what_we_do.point3')];

  return (
    <motion.section
      id="what-we-do"
      className={css.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className={css.inner}>
        <h2 className={css.title}>{t('what_we_do.title')}</h2>
        <p className={css.lead}>{t('what_we_do.lead')}</p>

        <ul className={css.cards} role="list">
          {points.map((text, i) => (
            <li key={text} className={`${css.card} ${css[CARD_KEYS[i]]}`}>
              <span className={css.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <p className={css.cardText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
