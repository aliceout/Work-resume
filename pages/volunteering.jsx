import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";

import H1 from "/components/titles/h1";
import VolunterCard from "/components/cards/VolunterCard";
import volunteeringData from "/data/volunteering";

export default function Volunteering() {
  const { t, i18n } = useTranslation("pages"); // Get the data for the current language
  const currentLanguageData = filterDataByLanguage(
    volunteeringData,
    i18n.language
  );

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("volunteering.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {currentLanguageData.map((job) => (
          <VolunterCard key={job.title} job={job} />
        ))}
      </section>
    </div>
  );
}
