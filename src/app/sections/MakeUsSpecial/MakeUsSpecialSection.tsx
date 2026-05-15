import React from 'react';
import css from './MakeUsSpecial.module.css';
import { LeftColumn } from './components/LeftColumn/LeftColumn';
import { RightColumn } from './components/RightColumn/RightColumn';
import { motion } from 'framer-motion';

export const MakeUsSpecial = () => {
    return (
        <motion.section
            id="make_special_section"
            className={css.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <LeftColumn />
            </motion.div>
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <RightColumn />
            </motion.div>
        </motion.section>
    );
};