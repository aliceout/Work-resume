import H2 from "/components/titles/H2";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Languages() {
  const { t, i18n } = useStaticTranslation("pages");
  const skillsContent = getSectionContent("skills", i18n.language);
  const languages = skillsContent?.languages || [];

  const langs = languages.map((lang) => (
    <div key={`${lang.title}-${lang.progress}`} className="flex flex-col">
      <div className="flex items-center justify-start my-2 text-sm gap-x-2 ">
        <p className="text-slate-700 dark:text-slate-300">{lang.title}</p>
        <p className="text-slate-700 dark:text-slate-200">|</p>
        <p className="font-semibold text-slate-500 dark:text-slate-200">
          {lang.level}
        </p>
      </div>
      <div className="w-full h-1.5 bg-blue-200 rounded-full">
        <div
          className="h-full text-xs text-center text-white rounded-full bg-sky-600"
          style={{ width: lang.progress }}
        ></div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-3">
      <H2 text={t("skills.languages.h2")} />
      <section className="grid px-4 md:grid-cols-2 gap-y-5 gap-x-20 dark:divide-gray-400">
        {langs}
      </section>
    </div>
  );
}

