import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language
    debug: true,
    ns: ['translation','doctors','about','veneers','implant','gynecology','contact', 'services', 'gyneServices'], 
    defaultNS: 'translation', 
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // ns: ['home'],
    // defaultNS: 'home',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    supportedLngs: ['en', 'ar'], // Supported languages
    react: {
      useSuspense: false,
      // defaultNS: 'home',
      keySeparator: false, 
      direction: (lng) => (lng === 'ar' ? 'rtl' : 'ltr'),
    },
  });

export default i18n;
