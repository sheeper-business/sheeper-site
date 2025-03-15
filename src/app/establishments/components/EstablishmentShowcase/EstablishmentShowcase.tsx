'use client';

import Image from 'next/image';
import styles from './EstablishmentShowcase.module.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EstablishmentShowcase() {
  const [imagesLoaded, setImagesLoaded] = useState({
    dealCarrousel: false,
    homepageScreen: false
  });

  const handleImageLoad = (imageName: any) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  const deals = [
    {
      id: 1,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 2,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 3,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
  ];

  const appDeals = [
    {
      id: 1,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 2,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
  ];

  const categories = ['Food', 'Travel', 'Entertainment', 'Shopping', 'Fitness'];

  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className={styles.leftSection}
        variants={leftSectionVariants}
      >
        <motion.h2
          className={styles.title}
          variants={titleVariants}
        >
          {t('establishment_showcase.left_column.title')}
        </motion.h2>
        <motion.p
          className={styles.description}
          variants={titleVariants}
        >
          {t('establishment_showcase.left_column.description')}
        </motion.p>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
            alignItems: 'center',
          }}
          variants={imageVariants}
        >
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
              src="/deal_carrousel.png"
              alt="Deal carousel"
              width={520}
              height={466}
              className={`${imagesLoaded.dealCarrousel ? styles.imageLoaded : styles.imageLoading}`}
              onLoad={() => handleImageLoad('dealCarrousel')}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.rightSection}
        variants={rightSectionVariants}
      >
        <motion.h2
          className={styles.title}
          variants={titleVariants}
        >
          {t('establishment_showcase.right_column.title')}
        </motion.h2>
        <motion.p
          className={styles.description}
          variants={titleVariants}
        >
          {t('establishment_showcase.right_column.description')}
        </motion.p>
        <motion.div
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/HomepageScreen.png"
            alt="Homepage screen"
            width={288}
            height={620}
            className={`${imagesLoaded.homepageScreen ? styles.imageLoaded : styles.imageLoading}`}
            onLoad={() => handleImageLoad('homepageScreen')}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}