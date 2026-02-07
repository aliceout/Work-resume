
import H1 from "/components/titles/h1";
import JobCard from "/components/cards/JobCard";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Jobs({ jobsContent }) {
  const { t } = useStaticTranslation("pages");
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

export async function getStaticProps({ locale }) {
  const jobsContent = await getSectionContent("jobs", locale);

  return {
    props: {
      jobsContent,
    },
  };
}

