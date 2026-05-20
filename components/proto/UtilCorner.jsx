import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function UtilCorner() {
  const { resolvedTheme, setTheme } = useTheme();
  const { i18n, locale } = useStaticTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute(
      "data-theme",
      resolvedTheme === "dark" ? "dark" : "light"
    );
  }, [resolvedTheme, mounted]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const nextLocale = locale === "fr" ? "en" : "fr";

  return (
    <div className="fixed top-[22px] right-[26px] z-50 flex items-center gap-1 backdrop-blur-sm border border-line rounded-full p-1 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_18px_rgba(0,0,0,0.04)] bg-surface-card">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        title={isDark ? "Mode clair" : "Mode sombre"}
        className="w-8 h-8 grid place-items-center rounded-full text-ink-2 hover:text-ink hover:bg-surface-tint transition-colors"
      >
        <Icon name={isDark ? "sun" : "moon"} size={14} />
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage(nextLocale)}
        title={`Switch to ${nextLocale.toUpperCase()}`}
        className="w-8 h-8 grid place-items-center rounded-full text-[10px] font-mono font-semibold text-ink-2 hover:text-ink hover:bg-surface-tint transition-colors uppercase"
      >
        {locale}
      </button>
    </div>
  );
}
