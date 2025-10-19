
import { useTranslation } from "react-i18next";
import H1 from "/components/titles/h1";
import JobCard from "/components/cards/JobCard";
import { getSectionContent } from "/utils/content";

export default function Jobs() {
  const { t, i18n } = useTranslation("pages");
  const jobsContent = getSectionContent("jobs", i18n.language);
  const jobs = jobsContent?.items || [];

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("works.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {jobs.map((job) => (
          <JobCard key={`${job.company}-${job.date}`} job={job} />
        ))}
      </section>
    </div>
  );
}

