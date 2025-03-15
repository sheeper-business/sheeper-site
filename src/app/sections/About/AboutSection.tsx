import Image from 'next/image';
import React from 'react';
import css from './AboutSection.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <motion.section
      id="about_section"
      className={css.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "2rem", marginRight: "2rem", width: '60%' }}>
        <motion.div
          className={css.containerText}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={css.title}>Incredible deals are waiting for you..</h2>
          <p className={css.description}>
            We are on a mission to save your time and money. Your adventure begins with a single
            tap!
          </p>
          <div className={css.containerDownload}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppButton
                variant="contained"
                color="primary"
                className={css.downloadButton}
                href="#footer"
              >
                <span className={css.downloadText}>Download now</span>
              </AppButton>
            </motion.div>
          </div>
        </motion.div>
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
    </motion.section>
  );
};