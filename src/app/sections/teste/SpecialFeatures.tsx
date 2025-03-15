'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SpecialFeatures.module.css';
import { colors } from '@/app/colors';
import { FaBell, FaGift, FaUsers } from 'react-icons/fa';
import { t } from 'i18next';
import { motion } from 'framer-motion';

export default function SpecialFeatures() {
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
  });

  const handleImageLoad = (imageName: any) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className={styles.title}
        variants={itemVariants}
      >
        {t('what_make_us_special.title')}
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
      >
        <motion.div
          className={styles.feature} // Changed from featureWide to feature
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Image
            src="/influencers.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={`${styles.image} ${imagesLoaded.image1 ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('image1')}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              <motion.div
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <FaUsers color={colors.primary} size={40} />
              </motion.div>
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.available_to_everyone.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.available_to_everyone.description')}
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.feature} // Changed from mainImage to feature
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Image
            src="/loyalty.jpeg"
            alt="People working in a cafe"
            width={400}
            height={200} // Adjusted height
            className={`${styles.image} ${imagesLoaded.image2 ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('image2')}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.5 }
                }}
              >
                <FaBell color={colors.primary} size={40} />
              </motion.div>
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.location_notifications.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.location_notifications.description')}
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.feature}
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Image
            src="/man_on_phone.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={`${styles.image} ${imagesLoaded.image3 ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('image3')}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              <motion.div
                variants={iconVariants}
                whileHover={{
                  rotate: [0, 0, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <FaGift color={colors.primary} size={40} />
              </motion.div>
              <h3 className={styles.featureTitle}>
                {t('what_make_us_special.tailored_deals.title')}
              </h3>
            </div>
            <p className={styles.featureDescription}>
              {t('what_make_us_special.tailored_deals.description')}
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          className={styles.feature} // Changed from featureWide to feature
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/deal_cards.jpeg"
            alt="People enjoying drinks"
            width={400}
            height={200}
            className={`${styles.image} ${imagesLoaded.image4 ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('image4')}
          />
        </motion.div>

        <motion.div
          className={styles.feature}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/special_features5.png"
            alt="Mobile app notifications"
            width={400}
            height={200}
            className={`${styles.image} ${imagesLoaded.image5 ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('image5')}
          />
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
}