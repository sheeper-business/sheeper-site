'use client';

import Image from 'next/image';
import styles from './SpecialFeatures.module.css';
import { colors } from '@/app/colors';
import { Icon } from '@mui/material';
import { FaBell, FaGift, FaUsers } from 'react-icons/fa';
import { t } from 'i18next';

export default function SpecialFeatures() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('what_make_us_special.title')}</h2>

      <div className={styles.grid}>
        <div className={styles.featureWide}>
          <Image
            src="/likes_screen.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <User className={styles.icon} /> */}
              <FaUsers color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.available_to_everyone.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.available_to_everyone.description')}
            </p>
          </div>
        </div>

        <div className={styles.mainImage}>
          <Image
            src="/special_features3.png"
            alt="People working in a cafe"
            width={600}
            height={400}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <Bell className={styles.icon} /> */}
              <FaBell color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.location_notifications.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.location_notifications.description')}
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image
            src="/special_features4.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <Gift className={styles.icon} /> */}
              <FaGift color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.tailored_deals.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.tailored_deals.description')}
            </p>
          </div>
        </div>

        <div className={styles.featureWide}>
          <Image
            src="/special_features2.png"
            alt="People enjoying drinks"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>

        <div className={styles.feature}>
          <Image
            src="/special_features5.png"
            alt="Mobile app notifications"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
