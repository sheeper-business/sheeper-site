import Image from 'next/image';
import React from 'react';
import css from './Step.module.css';
import { colors } from '@/app/colors';

interface IProps {
  title: string;
  description: string;
  image: string;
  index: string;
}

export const Step = ({ title, description, image, index }: IProps) => {
  return (
    <div className={css.container}>
      <Image src={image} alt="step1" width={217} height={435} />
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        <div>
          <div
            style={{
              width: 32,
              height: 32,
              background: colors.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <span style={{ fontWeight: 700, color: colors.white }}>{index}</span>
          </div>
        </div>
        <div>
          <h6>{title}</h6>
          <p className={css.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
