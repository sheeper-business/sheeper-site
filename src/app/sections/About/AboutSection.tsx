import Image from 'next/image';
import React from 'react';
import css from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section className={css.section}>
      <div className={css.containerText}>
        <h2 className={css.title}>Incredible deals are waiting for you..</h2>
        <p className={css.description}>
          We are on a mission to save your time and money. Your adventure begins with a single tap!
        </p>
      </div>
      <div className={css.containerImages}>
        <Image
          src="/about1.png"
          alt="homepage"
          width={580}
          height={968}
          className={css.firstImage}
        />
        <Image
          src="/about2.png"
          alt="homepage"
          width={700}
          height={1034}
          className={css.secondImage}
        />
      </div>
    </section>
  );
};
