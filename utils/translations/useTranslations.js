import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import {
  resolveTranslation,
  translationsConfig,
} from "./index";

const { normaliseLocale, DEFAULT_LOCALE } = translationsConfig;

const toNamespaceArray = (namespaces) => {
  if (Array.isArray(namespaces)) {
    return namespaces;
  }

  if (typeof namespaces === "string" && namespaces.trim().length > 0) {
    return [namespaces];
  }

  return [];
};

export const useStaticTranslation = (namespaces) => {
  const router = useRouter();
  const namespacesList = useMemo(
    () => toNamespaceArray(namespaces),
    [namespaces]
  );

  const locale = normaliseLocale(router?.locale || DEFAULT_LOCALE);

  const translate = useCallback(
    (key, defaultValue) => {
      const value = resolveTranslation(namespacesList, key, locale);

      if (value !== undefined) {
        return value;
      }

      if (defaultValue !== undefined) {
        return defaultValue;
      }

      return key;
    },
    [locale, namespacesList]
  );

  const changeLanguage = useCallback(
    async (nextLocale) => {
      const targetLocale = normaliseLocale(nextLocale);

      if (!router) {
        return targetLocale;
      }

      if (targetLocale === locale) {
        return targetLocale;
      }

      const currentAsPath = router.asPath || router.pathname || "/";

      await router.push(currentAsPath, currentAsPath, {
        locale: targetLocale,
        scroll: false,
      });

      return targetLocale;
    },
    [locale, router]
  );

  const i18n = useMemo(
    () => ({
      language: locale,
      changeLanguage,
    }),
    [changeLanguage, locale]
  );

  return { t: translate, i18n, locale };
};
