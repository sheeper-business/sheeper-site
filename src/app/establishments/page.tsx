'use client';

import React, { useEffect } from 'react';
import css from './EstablishmentsPage.module.css';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { ThemeProvider } from '../ThemeProvider';
import theme from '../theme';
import i18n from '../../../i18n';
import HeroSection from './components/HeroSection/HeroSection';
import LoyaltyCardSection from './components/LoyaltyCardSection/LoyaltyCardSection';
import InfluencerSection from './components/InfluencerSection/InfluencerSection';
import EstablishmentShowcase from './components/EstablishmentShowcase/EstablishmentShowcase';

export default function EstablishmentsPage() {
  const { t } = useTranslation('common');

  // Add smooth scrolling effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

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