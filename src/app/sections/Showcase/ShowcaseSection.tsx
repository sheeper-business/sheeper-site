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
        text="Get real-time notifications for nearby deals that match your interests as you pass by!"
        style={css.textDiscover1}
      />
      <TextAbsolute
        text="Unlock exclusive deals tailored to you, delivered straight to your device as you go about your day with Sheeper."
        style={css.textDiscover2}
      />
    </section>
  );
};
