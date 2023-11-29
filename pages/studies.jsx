import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";

import studiesData from "/data/studies";
import H1 from "/components/titles/h1";
import StudyCard from "/components/cards/StudyCard";

export default function Studies() {
  const { t, i18n } = useTranslation("pages");

  // Get the data for the current language
  const currentLanguageData = filterDataByLanguage(studiesData, i18n.language);
  
  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("studies.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {currentLanguageData.map((study) => (
          <StudyCard key={study.title} study={study} />
        ))}
      </section>
    </div>
  );
}
