'use client';

import React, { useEffect, useState } from 'react';
import css from './home.module.css';
import Image from 'next/image';
import '@fontsource/raleway';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ContactSection } from './components/ContactSection/ContactSection';
import { AppButton } from '../components/AppButton/AppButton';
import { WhatWeDoSection } from './components/WhatWeDoSection/WhatWeDoSection';
import { ForBusinessesSection } from './components/ForBusinessesSection/ForBusinessesSection';

export const Home = () => {
  const { t } = useTranslation('common');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={css.host}>
      <div className={css.containerFirstTwoSection}>
        <motion.section className={css.heroSection} initial="hidden" animate="visible" variants={fadeInUp}>
          <div className={css.heroGrid}>
            <div className={css.heroCopy}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={css.heroTitle}>{t('hero.title')}</h1>
                <p className={css.heroDescription}>{t('hero.description')}</p>
                <div className={css.heroCtas}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <AppButton variant="contained" color="primary" href="#contact" className={css.heroPrimaryCta}>
                      {t('hero.contact_button')}
                    </AppButton>
                  </motion.div>
                </div>
                <div className={css.storeBadges}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/pt/app/sheeper/id6450721028"
                    className={css.storeLink}
                  >
                    <Image
                      src="/ios_store_button.webp"
                      alt="Download on the App Store"
                      width={180}
                      height={54}
                      className={`${css.storesImages} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.sheeper.sheeper"
                    className={css.storeLink}
                  >
                    <Image
                      src="/android_store_button.webp"
                      alt="Get it on Google Play"
                      width={180}
                      height={54}
                      className={`${css.storesImages} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </a>
                </div>
              </motion.div>
            </div>

            <div
              className={css.heroVisual}
              role="img"
              aria-label={t('hero.image_aria')}
            >
              <div className={css.heroPhoneShell}>
                <div className={css.heroPhoneScreen}>
                  <Image
                    src="/loyalty_card_screen.png"
                    alt=""
                    width={390}
                    height={844}
                    priority
                    className={`${css.heroScreenImg} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                    sizes="(max-width: 900px) 72vw, 300px"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <WhatWeDoSection />
      <ForBusinessesSection />
      <ContactSection />
    </div>
  );
};
