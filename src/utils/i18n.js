import pagesFR from "../data/locales/fr/pages.json";
import pagesEN from "../data/locales/en/pages.json";
import sidebarFR from "../data/locales/fr/sidebar.json";
import sidebarEN from "../data/locales/en/sidebar.json";
import commonFR from "../data/locales/fr/common.json";
import commonEN from "../data/locales/en/common.json";
import site from "../data/site.json";

const TRANSLATIONS = {
  pages: { fr: pagesFR, en: pagesEN },
  sidebar: { fr: sidebarFR, en: sidebarEN },
  common: { fr: { ...site, ...commonFR }, en: { ...site, ...commonEN } },
};

const SUPPORTED_LOCALES = ["fr", "en"];
const DEFAULT_LOCALE = "fr";

export const normaliseLocale = (locale) => {
  if (!locale) return DEFAULT_LOCALE;
  const base = String(locale).split("-")[0];
  return SUPPORTED_LOCALES.includes(base) ? base : DEFAULT_LOCALE;
};

const getValue = (dict, key) => {
  if (!dict) return undefined;
  if (!key) return dict;
  const segments = key.split(".");
  let current = dict;
  for (const seg of segments) {
    if (
      current == null ||
      typeof current !== "object" ||
      !(seg in current)
    ) {
      return undefined;
    }
    current = current[seg];
  }
  return current;
};

export const useTranslation = (namespaces, locale) => {
  const list = Array.isArray(namespaces) ? namespaces : [namespaces];
  const lang = normaliseLocale(locale);
  const t = (key, defaultValue) => {
    for (const ns of list) {
      const dict =
        TRANSLATIONS[ns]?.[lang] || TRANSLATIONS[ns]?.[DEFAULT_LOCALE];
      const value = getValue(dict, key);
      if (value !== undefined) return value;
    }
    return defaultValue !== undefined ? defaultValue : key;
  };
  return { t, locale: lang };
};
