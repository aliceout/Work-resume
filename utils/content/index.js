import homeFR from "../../public/locales/fr/content/home.json";
import homeEN from "../../public/locales/en/content/home.json";
import jobsFR from "../../public/locales/fr/content/jobs.json";
import jobsEN from "../../public/locales/en/content/jobs.json";
import portfolioFR from "../../public/locales/fr/content/portfolio.json";
import portfolioEN from "../../public/locales/en/content/portfolio.json";
import skillsFR from "../../public/locales/fr/content/skills.json";
import skillsEN from "../../public/locales/en/content/skills.json";
import studiesFR from "../../public/locales/fr/content/studies.json";
import studiesEN from "../../public/locales/en/content/studies.json";
import volunteeringFR from "../../public/locales/fr/content/volunteering.json";
import volunteeringEN from "../../public/locales/en/content/volunteering.json";

const DEFAULT_LOCALE = "fr";

const CONTENT_BY_SECTION = {
  home: {
    fr: homeFR,
    en: homeEN,
  },
  jobs: {
    fr: jobsFR,
    en: jobsEN,
  },
  portfolio: {
    fr: portfolioFR,
    en: portfolioEN,
  },
  skills: {
    fr: skillsFR,
    en: skillsEN,
  },
  studies: {
    fr: studiesFR,
    en: studiesEN,
  },
  volunteering: {
    fr: volunteeringFR,
    en: volunteeringEN,
  },
};

const SUPPORTED_LOCALES = ["fr", "en"];

const normaliseLocale = (locale) => {
  if (!locale) {
    return DEFAULT_LOCALE;
  }

  const base = locale.split("-")[0];
  return SUPPORTED_LOCALES.includes(base) ? base : DEFAULT_LOCALE;
};

export const getSectionContent = (section, locale) => {
  const language = normaliseLocale(locale);
  const sectionContent = CONTENT_BY_SECTION[section];

  if (!sectionContent) {
    return null;
  }

  return sectionContent[language] || sectionContent[DEFAULT_LOCALE] || null;
};
