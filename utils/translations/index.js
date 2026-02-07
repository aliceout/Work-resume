import buttonsFR from "../../public/locales/fr/buttons.json";
import buttonsEN from "../../public/locales/en/buttons.json";
import mobileMenuFR from "../../public/locales/fr/mobileMenu.json";
import mobileMenuEN from "../../public/locales/en/mobileMenu.json";
import navbarFR from "../../public/locales/fr/navbar.json";
import navbarEN from "../../public/locales/en/navbar.json";
import pagesFR from "../../public/locales/fr/pages.json";
import pagesEN from "../../public/locales/en/pages.json";
import sidebarFR from "../../public/locales/fr/sidebar.json";
import sidebarEN from "../../public/locales/en/sidebar.json";

const DEFAULT_LOCALE = "fr";
const SUPPORTED_LOCALES = ["fr", "en"];

const TRANSLATIONS_BY_NAMESPACE = {
  buttons: {
    fr: buttonsFR,
    en: buttonsEN,
  },
  mobileMenu: {
    fr: mobileMenuFR,
    en: mobileMenuEN,
  },
  navbar: {
    fr: navbarFR,
    en: navbarEN,
  },
  pages: {
    fr: pagesFR,
    en: pagesEN,
  },
  sidebar: {
    fr: sidebarFR,
    en: sidebarEN,
  },
};

const normaliseLocale = (locale) => {
  if (!locale) {
    return DEFAULT_LOCALE;
  }

  const languageCode = locale.split("-")[0];

  return SUPPORTED_LOCALES.includes(languageCode)
    ? languageCode
    : DEFAULT_LOCALE;
};

const toNamespaceArray = (namespaces) => {
  if (Array.isArray(namespaces)) {
    return namespaces;
  }

  if (typeof namespaces === "string" && namespaces.trim().length > 0) {
    return [namespaces];
  }

  return [];
};

const getNamespaceDictionary = (namespace, locale) => {
  const dictionaries = TRANSLATIONS_BY_NAMESPACE[namespace];

  if (!dictionaries) {
    return null;
  }

  const normalisedLocale = normaliseLocale(locale);

  return (
    dictionaries[normalisedLocale] ||
    dictionaries[DEFAULT_LOCALE] ||
    null
  );
};

const getValueFromDictionary = (dictionary, key) => {
  if (!dictionary) {
    return undefined;
  }

  if (!key) {
    return dictionary;
  }

  const segments = key.split(".");
  let current = dictionary;

  for (const segment of segments) {
    if (
      !Object.prototype.hasOwnProperty.call(current, segment) ||
      current[segment] === undefined ||
      current[segment] === null
    ) {
      return undefined;
    }

    current = current[segment];
  }

  return current;
};

export const resolveTranslation = (namespaces, key, locale) => {
  const namespacesList = toNamespaceArray(namespaces);

  for (const namespace of namespacesList) {
    const dictionary = getNamespaceDictionary(namespace, locale);
    const value = getValueFromDictionary(dictionary, key);

    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
};

export const getTranslations = (namespaces, locale) => {
  const namespacesList = toNamespaceArray(namespaces);

  if (namespacesList.length === 0) {
    return {};
  }

  return namespacesList.reduce((accumulator, namespace) => {
    const dictionary = getNamespaceDictionary(namespace, locale);

    if (!dictionary) {
      return accumulator;
    }

    return { ...accumulator, ...dictionary };
  }, {});
};

export const translationsConfig = {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  normaliseLocale,
  getNamespaceDictionary,
};

