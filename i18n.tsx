import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from '@/public/locales/en/common.json';
import common_el from '@/public/locales/el/common.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: common_en,
      },
      el: {
        common: common_el,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    ns: ['common'], // Namespaces used in the app
    defaultNS: 'common', // Default namespace
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;