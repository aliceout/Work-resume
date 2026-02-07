import { useEffect, useMemo, useState } from "react";

const DEFAULT_LOCALE = "fr";
const SUPPORTED_LOCALES = ["fr", "en"];
const contentCache = new Map();

const normaliseLocale = (locale) => {
  if (!locale) {
    return DEFAULT_LOCALE;
  }

  const base = locale.split("-")[0];
  return SUPPORTED_LOCALES.includes(base) ? base : DEFAULT_LOCALE;
};

const buildContentUrl = (section, locale) => `/locales/${locale}/content/${section}.json`;

const fetchContent = async (section, locale) => {
  const cacheKey = `${locale}:${section}`;
  const cached = contentCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const request = fetch(buildContentUrl(section, locale)).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Unable to load content for ${cacheKey}`);
    }

    return response.json();
  });

  contentCache.set(cacheKey, request);
  return request;
};

export const useSectionContent = (section, locale) => {
  const language = useMemo(() => normaliseLocale(locale), [locale]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const data = await fetchContent(section, language);
        if (!cancelled) {
          setContent(data);
        }
        return;
      } catch (error) {
        if (language === DEFAULT_LOCALE) {
          if (!cancelled) {
            setContent(null);
          }
          return;
        }
      }

      try {
        const fallbackData = await fetchContent(section, DEFAULT_LOCALE);
        if (!cancelled) {
          setContent(fallbackData);
        }
      } catch {
        if (!cancelled) {
          setContent(null);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [section, language]);

  return content;
};
