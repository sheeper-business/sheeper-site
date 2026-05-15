import type { Metadata } from 'next';
import React from 'react';
import css from './lxfactory.module.css';
import Image from 'next/image';
import {
  defaultLocale,
  defaultOgImagePath,
  defaultOgImageSize,
  siteName,
  siteUrl,
} from '@/lib/seo';

const path = '/LXFactory';

export const metadata: Metadata = {
  title: 'Sheeper no LX Factory',
  description:
    'Carimbos e recompensas no LX Factory com a app Sheeper — fidelização digital em Lisboa.',
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: `${siteUrl}${path}`,
    siteName,
    title: `LX Factory | ${siteName}`,
    description: 'Fidelização digital e recompensas no LX Factory, Lisboa.',
    images: [
      {
        url: defaultOgImagePath,
        width: defaultOgImageSize.width,
        height: defaultOgImageSize.height,
        alt: 'Sheeper no LX Factory',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LXFactory() {
    return (
        <div className={css.host} >
            <section className={css.heroSection}>
                <div className={css.content}>
                    <h1 className={css.title}>Collect stamps and rewards at LX Factory with Sheeper</h1>
                </div>
                <Image className={css.image} src="/hero-phone.png" alt="Sheeper loyalty app at LX Factory Lisbon" width={300} height={320} loading='eager' />

                <div className={css.containerButtons}>
                    <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://apps.apple.com/pt/app/sheeper/id6450721028"
                    >
                        <Image
                            src="/ios_store_button.webp"
                            alt="shepper ios"
                            width={225}
                            height={67}
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
                            width={225}
                            height={67}
                            className={css.storesImages}
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}
