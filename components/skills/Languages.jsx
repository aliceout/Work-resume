import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";
import H2 from "/components/titles/h2";
import languages from "/data/languages";

export default function Languages() {
  const { t, i18n } = useTranslation("pages");

  const langs = languages.map((lang) => {
    return (
      <div
        key={filterDataByLanguage(lang.title, i18n.language)}
        class="flex flex-col"
      >
        <div class="flex items-center justify-start my-2 gap-x-2   text-sm ">
          <p class="text-slate-700 dark:text-slate-300">
            {filterDataByLanguage(lang.title, i18n.language)}
          </p>
          <p class="text-slate-700 dark:text-slate-200">|</p>
          <p class="text-slate-500 dark:text-slate-200 font-semibold">
            {filterDataByLanguage(lang.level, i18n.language)}
          </p>
        </div>
        <div class="w-full h-1.5 bg-blue-200 rounded-full">
          <div
            class="h-full text-center text-xs text-white bg-sky-600 rounded-full"
            style={{ width: lang.progress }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-3">
      <H2 text={t("skills.languages.h2")} />
      <section className="grid px-4 md:grid-cols-2 gap-y-5 gap-x-20 dark:divide-gray-400">
        {langs}
      </section>
    </div>
  );
}
