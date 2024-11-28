import React from 'react';
import css from './ShowcaseSection.module.css';
import Image from 'next/image';
import { TextAbsolute } from './components/TextAbsolute/TextAbsolute';

export const ShowcaseSection = () => {
  return (
    <section id="showcase_section" className={css.section}>
      <Image src="/logo_on_black.png" alt="logo" width={233} height={188} className={css.logo} />
      <div className={css.containerTitle}>
        <h3 className={css.title}>Dive into sheeper: Where Deals Find You!</h3>
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
        <p className={css.linkText}>
          Scroll through popular picks, filter by categories, and choose your location to uncover
          the best local deals. Click on a deal to reveal all the juicy details, explore the
          description, location, similar deals, and share it with ease.
        </p>
        <div>
          <p className={css.linkText}>
            <a className={css.link} href="https://oiatg37ji32.typeform.com/to/i8HpBOjV">
              Do you want to become a partner? It`s free!
            </a>
          </p>
          <p className={css.linkText}>
            Discover how partnering with us can enhance your business and bring in more customers.
          </p>
        </div>
      </div>
    </section>
  );
};
