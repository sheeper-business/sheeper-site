import React from 'react';
import css from './home.module.css';
import Image from 'next/image';
import '@fontsource/raleway';
import { AboutSection } from '../sections/About/AboutSection';
import { ShowcaseSection } from '../sections/Showcase/ShowcaseSection';
import Link from 'next/link';

export const Home = () => {
  return (
    <div className={css.host}>
      <section className={css.heroSection}>
        <div className={css.content}>
          <h1 className={css.title}>Your Gateway to</h1>
          <h1 className={css.title}>
            - Unbeatable <span className={css.dealsText}>deals</span>
          </h1>
        </div>
        <Image className={css.image} src="/hero-phone.png" alt="Login" width={300} height={320} />

        <div className={css.containerButtons}>
          <Link href="https://apps.apple.com/pt/app/sheeper/id6450721028" passHref>
            <a target="blank" rel="noopener noreferrer">
              <Image
                src="/ios_store_button.webp"
                alt="shepper ios"
                width={225}
                height={67}
                className={css.storesImages}
              />
            </a>
          </Link>

          <Image
            src="/android_store_button.webp"
            alt="shepper android"
            width={225}
            height={67}
            className={css.storesImages}
          />
        </div>
      </section>

      <AboutSection />
      <ShowcaseSection />
    </div>
  );
};
