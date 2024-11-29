'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './LanguagePicker.module.css';
import { colors } from '@/app/colors';

export const LanguagePicker = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Ensure language is set before rendering
    if (!currentLanguage) {
      setCurrentLanguage(i18n.language);
    }
  }, [i18n.language, currentLanguage]);

  const handleLanguage = (language: 'pt' | 'en') => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language); // Update state to avoid re-renders
  };

  // Render nothing until the language is set
  if (!currentLanguage) return null;

  return (
    <div className={css.container}>
      <div onClick={() => handleLanguage('en')} className={css.option}>
        <span
          style={
            currentLanguage === 'en'
              ? { textDecoration: 'underline', textDecorationColor: colors.primary }
              : undefined
          }
        >
          English 🇬🇧
        </span>
      </div>
      <div onClick={() => handleLanguage('pt')} className={css.option}>
        <span
          style={
            currentLanguage === 'pt'
              ? { textDecoration: 'underline', textDecorationColor: colors.primary }
              : undefined
          }
        >
          Português 🇵🇹
        </span>
      </div>
    </div>
  );
};
