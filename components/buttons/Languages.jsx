import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { CircleFlag } from "react-circle-flags";
import { translationsConfig } from "/utils/translations";

const { normaliseLocale, DEFAULT_LOCALE } = translationsConfig;

export default function LanguagesSwitcher() {
  const router = useRouter();
  const languages = useMemo(
    () => [
      { value: "fr", flag: "fr", next: "en", label: "Fran\u00E7ais" },
      { value: "en", flag: "uk", next: "fr", label: "English" },
    ],
    []
  );

  const currentLocale = normaliseLocale(router?.locale || DEFAULT_LOCALE);
  const currentLanguage =
    languages.find((language) => language.value === currentLocale) || languages[0];

  const nextLanguage =
    languages.find((language) => language.value === currentLanguage.next) ||
    languages[0];

  const handleToggle = useCallback(async () => {
    const targetLocale = nextLanguage.value;
    const currentAsPath = router.asPath || router.pathname || "/";

    await router.push(currentAsPath, currentAsPath, {
      locale: targetLocale,
      scroll: false,
    });
  }, [nextLanguage.value, router]);

  const ariaLabel = "Switch language to " + nextLanguage.label;

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center justify-center w-9 h-9 transition duration-300 bg-white rounded-full dark:bg-slate-900/90"
      aria-label={ariaLabel}
    >
      <CircleFlag countryCode={currentLanguage.flag} className="h-5" />
    </button>
  );
}
