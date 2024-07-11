import React from 'react';
import css from './MakeUsSpecial.module.css';
import Image from 'next/image';
import { LeftColumn } from './components/LeftColumn/LeftColumn';
import { RightColumn } from './components/RightColumn/RightColumn';

export const MakeUsSpecial = () => {
    return (
        <section className={css.section}>
            <LeftColumn />
            <RightColumn />

        </section>
    );
};
