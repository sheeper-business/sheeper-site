'use client';

import React from 'react';
import css from './EstablishmentsPage.module.css';
import { I18nextProvider, useTranslation } from 'react-i18next';
import Image from 'next/image';
import { AppButton } from '../components/AppButton/AppButton';
import { colors } from '../colors';
import { ThemeProvider } from '../ThemeProvider';
import theme from '../theme';
import i18n from '../../../i18n';
import HeroSection from './components/HeroSection/HeroSection';
import LoyaltyCardSection from './components/LoyaltyCardSection/LoyaltyCardSection';
import InfluencerSection from './components/InfluencerSection/InfluencerSection';
import DealShowcase from '../sections/DealShowcase/DealShowcase';
import EstablishmentShowcase from './components/EstablishmentShowcase/EstablishmentShowcase';
// import Image from 'next/image';

export default function EstablishmentsPage() {
  const { t } = useTranslation('common');

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <HeroSection />
        <InfluencerSection />
        <EstablishmentShowcase />
        <LoyaltyCardSection />
      </ThemeProvider>
    </I18nextProvider>
  );
}
