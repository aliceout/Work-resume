import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";

import H1 from "/components/titles/h1";
import JobCard from "/components/cards/JobCard";
import jobsData from "/data/jobs";

export default function Jobs() {
  const { t, i18n } = useTranslation("pages"); // Get the data for the current language
  const currentLanguageData = filterDataByLanguage(jobsData, i18n.language);

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("works.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {currentLanguageData.map((job) => (
          <JobCard key={job.title} job={job} />
        ))}
      </section>
    </div>
  );
}
