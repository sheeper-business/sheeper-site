'use client';

import Link from 'next/link';
import React from 'react';
import css from './navbar.module.css';
import Image from 'next/image';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { useTranslation } from 'react-i18next';

export function NavBar() {
  const { t } = useTranslation('common');

  return (
    <nav className={css.host}>
      <div className={css.logo}>
        <Link href="/">
          <Image
            src="/sheeper-text.png"
            alt="Sheeper"
            width={158}
            height={37}
            className={css.logo}
            priority
          />
        </Link>
      </div>
      <div className={css.navbar}>
        <Link className={css.navitem} href="/#what-we-do">
          {t('navbar.what_we_do')}
        </Link>
        <Link className={css.navitem} href="/#for-businesses">
          {t('navbar.for_businesses')}
        </Link>
        <Link className={css.navitem} href="/loyalty-cards">
          {t('navbar.loyalty_cards')}
        </Link>
      </div>
      <div className={css.loginContainer}>
        <Link href="/#contact" className={css.contactCta}>
          {t('navbar.contact_cta')}
        </Link>
        <LanguagePicker />
      </div>
    </nav>
  );
}
