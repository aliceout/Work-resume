import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";
import H2 from "/components/titles/H2";
import languages from "/data/languages";

export default function Languages() {
  const { t, i18n } = useTranslation("pages");
  const currentLanguage = i18n.language || "fr";


  const langs = languages.map((lang) => {
    return (
      <div
        key={filterDataByLanguage(lang.title, currentLanguage)}
        className="flex flex-col"
      >
        <div className="flex items-center justify-start my-2 text-sm gap-x-2 ">
          <p className="text-slate-700 dark:text-slate-300">
            {filterDataByLanguage(lang.title, currentLanguage)}
          </p>
          <p className="text-slate-700 dark:text-slate-200">|</p>
          <p className="font-semibold text-slate-500 dark:text-slate-200">
            {filterDataByLanguage(lang.level, currentLanguage)}
          </p>
        </div>
        <div className="w-full h-1.5 bg-blue-200 rounded-full">
          <div
            className="h-full text-xs text-center text-white rounded-full bg-sky-600"
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
