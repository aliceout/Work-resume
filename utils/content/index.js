import { readFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_LOCALE = "fr";
const SUPPORTED_LOCALES = ["fr", "en"];

export const normaliseLocale = (locale) => {
  if (!locale) {
    return DEFAULT_LOCALE;
  }

  const base = locale.split("-")[0];
  return SUPPORTED_LOCALES.includes(base) ? base : DEFAULT_LOCALE;
};

const getContentFilePath = (section, locale) =>
  path.join(process.cwd(), "public", "locales", locale, "content", `${section}.json`);

const readSectionContent = async (section, locale) => {
  const filePath = getContentFilePath(section, locale);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
};

export const getSectionContent = async (section, locale) => {
  const language = normaliseLocale(locale);

  try {
    return await readSectionContent(section, language);
  } catch (error) {
    if (language === DEFAULT_LOCALE) {
      return null;
    }
  }

  try {
    return await readSectionContent(section, DEFAULT_LOCALE);
  } catch {
    return null;
  }
};
