import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";

export default function LanguagesSwitcher() {
  const { i18n } = useTranslation();

  const languages = useMemo(
    () => [
      { value: "fr", flag: "fr", next: "en" },
      { value: "en", flag: "uk", next: "fr" },
    ],
    []
  );

  const current = languages.find((language) => language.value === i18n.language);
  const fallback = languages[0];
  const activeLanguage = current || fallback;

  const nextLanguage =
    languages.find((language) => language.value === activeLanguage.next) || fallback;

  const handleToggle = useCallback(async () => {
    await i18n.changeLanguage(nextLanguage.value);
  }, [i18n, nextLanguage.value]);

  const nextLabel = nextLanguage.value === "fr" ? "Fran\u00E7ais" : "English";
  const ariaLabel = "Switch language to " + nextLabel;

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center justify-center w-9 h-9 transition duration-300 bg-white rounded-full dark:bg-slate-900/90"
      aria-label={ariaLabel}
    >
      <CircleFlag countryCode={activeLanguage.flag} className="h-5" />
    </button>
  );
}
