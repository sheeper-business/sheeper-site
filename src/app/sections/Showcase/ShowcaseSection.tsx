import React from 'react';
import css from './ShowcaseSection.module.css';
import Image from 'next/image';
import { TextAbsolute } from './components/TextAbsolute/TextAbsolute';

export const ShowcaseSection = () => {
  return (
    <section className={css.section}>
      <Image src="/logo_on_black.png" alt="logo" width={160} height={126} className={css.logo} />
      <div className={css.containerTitle}>
        <h3 className={css.title}>Dive into sheeper: Where Deals Find You!</h3>
      </div>
      <Image src="/phones.png" alt="phones" width={450} height={450} className={css.image} />
      <TextAbsolute
        text="Scroll through popular picks, filter by categories, and choose your location to uncover the best local deals."
        style={css.textDiscover1}
      />
      <TextAbsolute
        text="Scroll through popular picks, filter by categories, and choose your location to uncover the best local deals."
        style={css.textDiscover2}
      />
    </section>
  );
};
