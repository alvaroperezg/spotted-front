import type { InitOptions } from 'i18next';

import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';

const i18nConfig: InitOptions = {
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { common: enCommon },
    es: { common: esCommon },
  },
};

export { i18nConfig };
