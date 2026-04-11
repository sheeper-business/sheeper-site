import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from './locales/en/common.json';
import ptCommon from './locales/pt/common.json';

const resources = {
  en: { common: enCommon },
  pt: { common: ptCommon },
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'pt',
      supportedLngs: ['en', 'pt'],
      ns: ['common'],
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
