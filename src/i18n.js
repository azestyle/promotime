import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tərcümə fayllarını import edirik
import translationEN from "./locales/en/translation.json";
import translationAZ from "./locales/az/translation.json";
import translationRU from "./locales/ru/translation.json";

// Resurs obyektini qururuq
const resources = {
  en: { translation: translationEN },
  az: { translation: translationAZ },
  ru: { translation: translationRU }
};
const savedLang = localStorage.getItem('i18nextLng') || 'az';
// i18n konfiqurasiyası
i18n
  .use(initReactI18next) // React ilə inteqrasiya
  .init({
    resources,
    lng: savedLang,            // sistem dili 
    fallbackLng: "en",    // əgər tərcümə tapılmasa, ingilis dilinə düşür
    interpolation: {
      escapeValue: false  // React artıq XSS qoruması edir
    }
  });

export default i18n;