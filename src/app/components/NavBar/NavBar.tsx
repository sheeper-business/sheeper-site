'use client';

import Link from 'next/link';
import React from 'react';
import css from './navbar.module.css';
import sheeper from '../../../assets/sheeper.png';
import Image from 'next/image';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { useTranslation } from 'react-i18next';

export function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className={css.host}>
      <div className={css.logo}>
        <Link href={'/'}>
          <Image
            src="/sheeper-text.png"
            alt="logo"
            width={158}
            height={37}
            className={css.logo}
            priority
          />
        </Link>

        {/* <Image src="/sheeper.png" alt="Logo da sua empresa" width={150} height={50} /> */}
      </div>
      <div className={css.navbar}>
        <Link className={css.navitem} href="#about_section">
          {t('navbar.about')}
        </Link>
        <Link className={css.navitem} href="/establishments">
          {t('navbar.establishments')}
        </Link>
        <Link className={css.navitem} href="#how_it_works">
          {t('navbar.how_it_works')}
        </Link>
        <Link className={css.navitem} href="#footer">
          {t('navbar.contacts')}
        </Link>
      </div>
      <div className={css.loginContainer}>
        {/* <span className={css.partner}>
          Are you a already a partner?{' '}
          <Link href={'https://sheeperbusiness.app/login'} className={css.login}>
            Login here
          </Link>
        </span> */}
        <LanguagePicker />
      </div>
    </nav>
  );
}
