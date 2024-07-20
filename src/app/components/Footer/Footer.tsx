'use client'

import Image from 'next/image';
import React from 'react';
import css from './footer.module.css';
import { IconButton } from './components/IconButton/IconButton';
import { CiMail } from 'react-icons/ci';

export default function Footer() {
  const openEmail = () => {
    const email = 'sheeper.business@gmail.com';
    const subject = 'How can we help?';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };


  return (
    <div className={css.host} id='footer' >
      <div className={css.info}>
        <h3 className={css.title}>Download Sheeper and enjoy your deals</h3>
        <div className={css.containerButtons}>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/pt/app/sheeper/id6450721028"
          >
            <Image
              src="/ios_store_button.webp"
              alt="homepage"
              width={225}
              height={67}
              className={css.storesImages}
            />
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.sheeper.sheeper"
          >
            <Image
              src="/android_store_button.webp"
              alt="homepage"
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
          alt="sheeper"
          width={157}
          height={37}
          className={css.logo}
        />

        <div className={css.containerContacts}>
          <a className={css.policyAnchor} style={{ textDecoration: 'underline' }} href="/policy">
            Privacy Policy
          </a>
          <div onClick={() => openEmail()} style={{ display: 'flex', alignItems: 'center' }}>
            <span className={css.contactsText}>Contact us</span>

            <IconButton icon={<CiMail size={24} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
