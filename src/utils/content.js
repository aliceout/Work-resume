const DEFAULT_LOCALE = "fr";
const SUPPORTED = ["fr", "en"];

const normalise = (locale) => {
  if (!locale) return DEFAULT_LOCALE;
  const base = String(locale).split("-")[0];
  return SUPPORTED.includes(base) ? base : DEFAULT_LOCALE;
};

// Eager import all locale content JSON at build time
const modules = import.meta.glob("../data/locales/*/content/*.json", {
  eager: true,
  import: "default",
});

const keyFor = (locale, section) =>
  `../data/locales/${locale}/content/${section}.json`;

export const getSectionContent = async (section, locale) => {
  const lang = normalise(locale);
  const primary = modules[keyFor(lang, section)];
  if (primary) return primary;
  if (lang === DEFAULT_LOCALE) return null;
  return modules[keyFor(DEFAULT_LOCALE, section)] || null;
};
