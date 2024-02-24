import Image from 'next/image';
import React from 'react';
import css from './footer.module.css';
import { IconButton } from './components/IconButton/IconButton';
import { CiMail } from 'react-icons/ci';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={css.host}>
      <div className={css.info}>
        <span className={css.title}>Download Sheeper and enjoy your deals</span>
        <div className={css.containerButtons}>
          <Link href="https://apps.apple.com/pt/app/sheeper/id6450721028" passHref>
            <a target="blank" rel="noopener noreferrer">
              <Image
                src="/ios_store_button.webp"
                alt="homepage"
                width={225}
                height={67}
                className={css.storesImages}
              />
            </a>
          </Link>
          <Image
            src="/android_store_button.webp"
            alt="homepage"
            width={225}
            height={67}
            className={css.storesImages}
          />
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
          <span className={css.contactsText}>Contact us</span>

          <IconButton icon={<CiMail size={24} />} />
        </div>
      </div>
    </div>
  );
}
