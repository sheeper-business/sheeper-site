import React, { useState } from 'react';
import css from './AppScreensSection.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AppScreensSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div
            className={css.container}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.h5
                style={{ textAlign: 'center', width: '80%', fontSize: "3rem" }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Dive into our app friendly UI for a seamless experience like never before
            </motion.h5>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/app-screens.png"
                    alt="app-screens"
                    width={1132}
                    height={686}
                    className={`${imageLoaded ? css.imageLoaded : css.imageLoading}`}
                    onLoad={() => setImageLoaded(true)}
                />
            </motion.div>
        </motion.div>
    );
};