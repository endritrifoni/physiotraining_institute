import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './translations/en.json';
import itTranslation from './translations/it.json';
import alTranslation from './translations/al.json';

// Get saved language from localStorage or use 'en' as default
const savedLanguage = localStorage.getItem('language') || 'en';

// Configure i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      it: {
        translation: itTranslation
      },
      al: {
        translation: alTranslation
      }
    },
    lng: savedLanguage, // use saved language or default to 'en'
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
