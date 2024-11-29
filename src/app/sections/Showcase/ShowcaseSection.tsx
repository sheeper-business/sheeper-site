'use client';

import React from 'react';
import css from './ShowcaseSection.module.css';
import Image from 'next/image';
import { TextAbsolute } from './components/TextAbsolute/TextAbsolute';
import { useTranslation } from 'react-i18next';

export const ShowcaseSection = () => {
  const { t } = useTranslation();

  return (
    <section id="showcase_section" className={css.section}>
      <Image src="/logo_on_black.png" alt="logo" width={233} height={188} className={css.logo} />
      <div className={css.containerTitle}>
        <h3 className={css.title}>{t('showcase.title')}</h3>
      </div>
      <Image src="/showcase.png" alt="phones" width={1408} height={878} className={css.image} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
          textAlign: 'center',
          paddingBottom: '4rem',
        }}
      >
        <p className={css.linkText}>{t('showcase.description')}</p>
        <div>
          <p className={css.linkText}>
            <a className={css.link} href="https://oiatg37ji32.typeform.com/to/i8HpBOjV">
              {t('showcase.partner')}
            </a>
          </p>
          <p className={css.linkText}>{t('showcase.partner.info')}</p>
        </div>
      </div>
    </section>
  );
};
