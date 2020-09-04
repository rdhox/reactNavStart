import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './lang/en.json';
import fr from './lang/fr.json';

const options = {
  resources: {
    en: { translation: en},
    fr: { translation: fr},
  },
  lng: 'fr',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false,
    wait: false
  },
};

i18n
  .use(initReactI18next)
  .init(options);