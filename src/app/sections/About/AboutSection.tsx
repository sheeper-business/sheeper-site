import Image from 'next/image';
import React from 'react';
import css from './AboutSection.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';

export const AboutSection = () => {
  return (
    <section id="about_section" className={css.section}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={css.containerText}>
          <h2 className={css.title}>Incredible deals are waiting for you..</h2>
          <p className={css.description}>
            We are on a mission to save your time and money. Your adventure begins with a single
            tap!
          </p>
          <div className={css.containerDownload}>
            <AppButton
              variant="contained"
              color="secondary"
              className={css.downloadButton}
              href="#footer"
            >
              <span className={css.downloadText}>Download now</span>
            </AppButton>
          </div>
        </div>
        {/* <div className={css.containerImages}>
          <Image
            src="/about1.png"
            alt="homepage"
            width={629}
            height={968}
            className={css.firstImage}
          />
          <Image
            src="/about2.png"
            alt="homepage"
            width={879}
            height={1034}
            className={css.secondImage}
          />
        </div> */}
      </div>
    </section>
  );
};
