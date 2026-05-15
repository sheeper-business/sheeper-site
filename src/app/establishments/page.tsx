'use client';

import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import LoyaltyCardSection from './components/LoyaltyCardSection/LoyaltyCardSection';

export default function EstablishmentsPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <HeroSection />
      <LoyaltyCardSection />
    </>
  );
}
