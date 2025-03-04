import { useTranslation as useI18nTranslation } from 'react-i18next';
import i18n from './i18n';

/**
 * Custom hook for translation functionality
 * @returns {Object} Translation utilities
 */
export const useTranslation = () => {
  const { t, i18n: i18nInstance } = useI18nTranslation();

  /**
   * Change the current language
   * @param {string} language - Language code (en, it, al)
   */
  const changeLanguage = (language) => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    // Change language in i18n
    i18n.changeLanguage(language);
  };

  /**
   * Get the current language
   * @returns {string} Current language code
   */
  const getCurrentLanguage = () => {
    return i18n.language;
  };

  return {
    t,
    i18n: i18nInstance,
    changeLanguage,
    getCurrentLanguage,
  };
};

export default useTranslation;
