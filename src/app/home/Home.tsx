'use client';

import React, { useEffect, useState } from 'react';
import css from './home.module.css';
import Image from 'next/image';
import '@fontsource/raleway';
import { ShowcaseSection } from '../sections/Showcase/ShowcaseSection';
import Head from 'next/head';
import Script from 'next/script';
import { Step } from './components/Steps/Step';
import SpecialFeatures from '../sections/teste/SpecialFeatures';
import { colors } from '../colors';
import DealShowcase from '../sections/DealShowcase/DealShowcase';
import { useTranslation } from 'react-i18next';
import { AboutSection } from '../sections/About/AboutSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MakeUsSpecial } from '../sections/MakeUsSpecial/MakeUsSpecialSection';
import { AppScreensSection } from '../sections/AppScreens/AppScreensSection';

export const Home = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Add smooth scrolling effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className={css.host}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Melhores Descontos em Restaurantes | Sheeper</title>
        <meta name="description" content="Encontre promoções exclusivas e os melhores descontos em restaurantes de Lisboa. Veja vídeos de influenciadores e aproveite o nosso loyalty card." />
        <meta name="keywords" content="descontos restaurantes Lisboa, promoções restaurantes Lisboa, ofertas exclusivas, influencers restaurantes, Sheeper deals, loyalty card Lisboa" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sheeper - Encontre os Melhores Descontos em Restaurantes" />
        <meta property="og:description" content="Descubra descontos exclusivos nos melhores restaurantes de Lisboa, com vídeos de influenciadores e ofertas especiais." />
        <meta property="og:image" content="https://www.sheeper.app/hero-phone.png" />
        <meta property="og:url" content="https://www.sheeper.app" />

        {/* Twitter */}
        <meta name="twitter:title" content="Sheeper - Os Melhores Descontos em Restaurantes de Lisboa" />
        <meta name="twitter:description" content="Aproveite promoções incríveis e descubra novas experiências gastronômicas em Lisboa com Sheeper." />
        <meta name="twitter:image" content="https://www.sheeper.app/hero-phone.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://www.sheeper.app" />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sheeper",
            "url": "https://www.sheeper.app",
            "logo": "https://www.sheeper.app/logo.png",
            "description": "Descubra descontos exclusivos em restaurantes de Lisboa. Veja vídeos de influenciadores e ganhe carimbos no nosso loyalty card.",
            "sameAs": [
              "https://www.instagram.com/sheeper.app/",
              "https://www.tiktok.com/@sheeper"
            ]
          })}
        </script>
      </Head>

      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X3WY4BEL4R"></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3WY4BEL4R');
          `,
        }}
      />
      <div className={css.containerFirstTwoSection}>
        <motion.section
          className={css.heroSection}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className={css.newHeader}>
            <motion.div
              className={css.newContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className={css.title}>{t('hero.title')}</h1>
              <p className={css.description}>{t('hero.description')}</p>
              <div style={{ marginTop: "1rem" }}>
                <p className={css.linkText}>{t('showcase.partner.info')}</p>

                <p className={css.linkText}>
                  <a className={css.link} href="https://oiatg37ji32.typeform.com/to/i8HpBOjV">
                    {t('showcase.partner')}
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              className={css.containerButtons}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.a
                target="blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/pt/app/sheeper/id6450721028"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/ios_store_button.webp"
                  alt="shepper ios"
                  width={211}
                  height={63}
                  className={`${css.storesImages} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.a>
              <motion.a
                target="blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.sheeper.sheeper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/android_store_button.webp"
                  alt="shepper android"
                  width={211}
                  height={63}
                  className={`${css.storesImages} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.a>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <Image
                className={`${css.image} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                src="/hero-phone.png"
                alt="Login"
                width={300}
                height={325}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </div>
        </motion.section>
        {/* <div className={css.loginContainer}>
        <span className={css.partner}>Are you a already a partner?&nbsp;</span>
        <Link href={'https://sheeperbusiness.app/login'} className={css.login}>
          Login here
        </Link>
      </div> */}
        {/* <ShowcaseSection /> */}
      </div>

      <motion.section
        id="how_it_works"
        className={css.sectionHowItWorks}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div>
          <h2 className={css.title}>{t('how_it_works.title')}</h2>
          <motion.div
            style={{ display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: '#E4F2FF',
                borderRadius: 36,
                padding: '1rem',
                width: 'fit-content',
                marginTop: '1rem',
              }}
            >
              <span style={{ color: colors.primary, fontWeight: 700 }}>
                {t('how_it_works.steps.title')}
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={css.stepsContainer}
          variants={staggerChildren}
        >
          <Step
            title={t('how_it_works.steps.first.title')}
            description={t('how_it_works.steps.first.description')}
            image="/HomepageScreen.png"
            index="1"
          />
          <Step
            title={t('how_it_works.steps.second.title')}
            description={t('how_it_works.steps.second.description')}
            image="/DealScreen.png"
            index="2"
          />
          <Step
            title={t('how_it_works.steps.third.title')}
            description={t('how_it_works.steps.third.description')}
            image="/RedeemDeal.png"
            index="3"
          />
        </motion.div>
      </motion.section>
      <SpecialFeatures />
      <DealShowcase />

      <AboutSection />
      <MakeUsSpecial />
      <AppScreensSection />
    </div>
  );
};