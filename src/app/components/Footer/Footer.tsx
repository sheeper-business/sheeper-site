import Image from 'next/image';
import React from 'react';
import css from './footer.module.css';

export default function Footer() {
  return (
    <div className={css.host}>
      {/* <div className={css.logo}>
        <Image
          className={css.image}
          src="/logo.jpeg"
          alt="logo"
          width={200}
          height={200}
        />
      </div> */}
      <div className={css.info}>
        <span>SHEEPER</span>
        <p>
          Explore the world of opportunities with Sheeper. Discover irresistible deals at a variety
          of local establishments
        </p>
      </div>
      <div className={css.contacts}>
        <span>Contacts</span>
        <p>
          Get in touch with us and let us know how we can make your experience even better. Your
          feedback is crucial to us. We look forward to hearing from you!
        </p>
        <p>E-mail: sheeper.business@gmail.com</p>
      </div>
    </div>
  );
}
