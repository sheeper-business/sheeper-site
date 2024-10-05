import React from 'react';
import css from './PartnerBanner.module.css';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { colors } from '@/app/colors';

export const PartnerBanner = () => {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.title}>
          <a href="https://www.sheeperbusiness.app/register">
            Do you want to become a partner? It`s free!
          </a>
        </h2>
        <p className={css.description}>
          Discover how partnering with us can enhance your business and bring in more customers.{' '}
          <a
            href="https://www.sheeperbusiness.app/register"
            style={{ color: colors.secondary, textDecoration: 'underline', fontWeight: 700 }}
          >
            Register now
          </a>
        </p>
      </div>
      <div></div>
    </div>
  );
};
