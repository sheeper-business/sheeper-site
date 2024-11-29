import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translations from /public/locales
  .use(LanguageDetector) // Detect language from browser settings
  .use(initReactI18next) // Bind react-i18next to i18next
  .init({
    fallbackLng: 'pt', // Default language
    debug: false, // Set to true for debugging during development
    interpolation: {
      escapeValue: false, // React already escapes strings by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    ns: ['common'], // Default namespace
    defaultNS: 'common', // Use the common namespace by default
  });

export default i18n;
