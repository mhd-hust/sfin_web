import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HEADER_VI from '../locales/vi/header.json';
import HEADER_EN from '../locales/en/header.json';
import FOOTER_VI from '../locales/vi/footer.json';
import FOOTER_EN from '../locales/en/footer.json';
import BUTTONS_VI from '../locales/vi/buttons.json';
import BUTTONS_EN from '../locales/en/buttons.json';

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt',
};

const initLang = localStorage.getItem('lang');

const resources = {
  en: {
    header: HEADER_EN,
    footer: FOOTER_EN,
    buttons: BUTTONS_EN,
  },
  vi: {
    header: HEADER_VI,
    footer: FOOTER_VI,
    buttons: BUTTONS_VI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initLang || 'vi',
  fallbackLng: 'en',
  ns: ['header', 'footer', 'buttons'],
  // defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
