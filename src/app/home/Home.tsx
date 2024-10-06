import React from 'react';
import css from './home.module.css';
import Image from 'next/image';
import '@fontsource/raleway';
import { AboutSection } from '../sections/About/AboutSection';
import { ShowcaseSection } from '../sections/Showcase/ShowcaseSection';
import Link from 'next/link';
import { MakeUsSpecial } from '../sections/MakeUsSpecial/MakeUsSpecialSection';
import { AppScreensSection } from '../sections/AppScreens/AppScreensSection';
import Head from 'next/head';
import Script from 'next/script';
import { Step } from './components/Steps/Step';
import { PartnerBanner } from './components/PartnerBanner/PartnerBanner';
import SpecialFeatures from '../sections/teste/SpecialFeatures';
import { colors } from '../colors';
import DealShowcase from '../sections/DealShowcase/DealShowcase';

export const Home = () => {
  return (
    <div className={css.host}>
      <Head>
        <title>Deals - Sheeper</title>
        <meta name="description" content="Find the best deals near you" />
        <meta name="keywords" content="deals, discounts, offers, best deals, Sheeper" />
        <meta property="og:title" content="Deals - Sheeper" />
        <meta property="og:description" content="Find the best deals near you with Sheeper." />
        <meta property="og:image" content="/hero-phone.png" />
        <meta property="og:url" content="https://www.sheeper.app" />
        <meta name="twitter:title" content="Deals - Sheeper" />
        <meta name="twitter:description" content="Find the best deals near you with Sheeper." />
        <meta name="twitter:image" content="/hero-phone.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
        <section className={css.heroSection}>
          <div className={css.newHeader}>
            <div className={css.newContent}>
              <h1 className={css.title}>Your gateway to unbeatable deals</h1>
              <p style={{ fontSize: 20, marginTop: '2rem' }}>
                Unlock exclusive deals at top restaurants, shops, and experiences with Sheeper. Save
                big while discovering the best spots in town!
              </p>
              <div className={css.containerButtons}>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/pt/app/sheeper/id6450721028"
                >
                  <Image
                    src="/ios_store_button.webp"
                    alt="shepper ios"
                    width={211}
                    height={63}
                    className={css.storesImages}
                  />
                </a>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.sheeper.sheeper"
                >
                  <Image
                    src="/android_store_button.webp"
                    alt="shepper android"
                    width={211}
                    height={63}
                    className={css.storesImages}
                  />
                </a>
              </div>
            </div>
            <Image
              className={css.image}
              src="/hero-phone.png"
              alt="Login"
              width={300}
              height={325}
              loading="eager"
            />
          </div>
        </section>
        {/* <div className={css.loginContainer}>
        <span className={css.partner}>Are you a already a partner?&nbsp;</span>
        <Link href={'https://sheeperbusiness.app/login'} className={css.login}>
          Login here
        </Link>
      </div> */}
        <ShowcaseSection />
      </div>

      <section id="how_it_works" className={css.sectionHowItWorks}>
        <div>
          <h2 className={css.title}>How it works</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: '#E4F2FF',
                borderRadius: 36,
                padding: '1rem',
                width: 'fit-content',
                marginTop: '1rem',
              }}
            >
              <span style={{ color: colors.primary, fontWeight: 700 }}>3 easy steps</span>
            </div>
          </div>
        </div>
        <div className={css.stepsContainer}>
          <Step
            title="Choose a deal"
            description="Find a deal that matches your taste!"
            image="/HomepageScreen.png"
            index="1"
          />
          <Step
            title="See if it matches your taste"
            description="See the video from the influencer to see if it what you want!"
            image="/DealScreen.png"
            index="2"
          />
          <Step
            title="Redeem the deal"
            description="Redeem the deal in our app and enjoy!"
            image="/RedeemDeal.png"
            index="3"
          />
        </div>
      </section>
      <SpecialFeatures />
      <DealShowcase />

      {/* <AboutSection /> */}
      {/* <MakeUsSpecial /> */}

      {/* <AppScreensSection /> */}
    </div>
  );
};
