'use client';

import Image from 'next/image';
import React from 'react';
import css from './footer.module.css';
import { IconButton } from './components/IconButton/IconButton';
import { CiMail } from 'react-icons/ci';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  const openEmail = () => {
    const email = 'sheeper.business@gmail.com';
    const subject = 'Sheeper';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={css.host} id="footer">
      <div className={css.info}>
        <h6 className={css.title}>{t('footer.title')}</h6>
        <div className={css.containerButtons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/pt/app/sheeper/id6450721028"
          >
            <Image
              src="/ios_store_button.webp"
              alt="Download Sheeper on the App Store"
              width={225}
              height={67}
              className={css.storesImages}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.sheeper.sheeper"
          >
            <Image
              src="/android_store_button.webp"
              alt="Get Sheeper on Google Play"
              width={225}
              height={67}
              className={css.storesImages}
            />
          </a>
        </div>
      </div>
      <div className={css.contacts}>
        <Image
          src="/sheeper-white.png"
          alt="Sheeper"
          width={157}
          height={37}
          className={css.logo}
        />

        <div className={css.containerContacts}>
          <a className={css.policyAnchor} style={{ textDecoration: 'underline' }} href="/policy">
            Privacy Policy
          </a>
          <a href="/#contact" className={css.contactsText} style={{ textDecoration: 'none' }}>
            {t('footer.contact_heading')}
          </a>
          <div
            onClick={() => openEmail()}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onKeyDown={(e) => e.key === 'Enter' && openEmail()}
            role="button"
            tabIndex={0}
          >
            <IconButton icon={<CiMail size={24} />} />
          </div>
          <a href="https://www.instagram.com/sheeper.app/" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<FaInstagram size={24} />} />
          </a>
          <a href="https://www.tiktok.com/@sheeperapp" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<FaTiktok size={24} />} />
          </a>
        </div>
      </div>
    </div>
  );
}
