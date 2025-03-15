import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import css from './Step.module.css'; // Make sure to create this CSS module

export const Step = ({ title, description, image, index }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className={css.step} variants={itemVariant}>
      <div className={css.stepNumber}>{index}</div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image}
          alt={title}
          width={250}
          height={500}
          className={`${css.stepImage} ${imageLoaded ? css.imageLoaded : css.imageLoading}`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
      <h3 className={css.stepTitle}>{title}</h3>
      <p className={css.stepDescription}>{description}</p>
    </motion.div>
  );
};