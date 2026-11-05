import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import sq from './locales/sq.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
export const locales = ['sq', 'en', 'de', 'fr', 'it'] as const;
export const languageCodes = { sq: 'AL', en: 'EN', de: 'DE', fr: 'FR', it: 'IT' };
export function makeI18n() {
  const instance = createInstance();
  const options = { resources: { en: { translation: en }, sq: { translation: sq }, de: { translation: de }, fr: { translation: fr }, it: { translation: it } }, lng: 'en', fallbackLng: 'en', supportedLngs: [...locales], initAsync: false, interpolation: { escapeValue: false }, react: { useSuspense: false } };
  void instance.use(initReactI18next).init(options);
  return instance;
}
export function isLocale(value: unknown): value is typeof locales[number] { return locales.some(l => l === value); }
