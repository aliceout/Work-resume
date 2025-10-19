import { useTranslation } from "react-i18next";

import H1 from "/components/titles/h1";
import JobCard from "/components/cards/JobCard";

export default function Jobs() {
  const { t } = useTranslation("pages");
  const { t: tContent } = useTranslation("content/jobs");
  const rawJobs = tContent("items", { returnObjects: true });
  const jobs = Array.isArray(rawJobs) ? rawJobs : [];

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
