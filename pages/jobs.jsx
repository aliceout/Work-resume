import H1 from "/components/titles/h1";
import JobCard from "/components/cards/JobCard";
import jobsData from "/data/jobs";

export default function Jobs() {

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text="Experiences" />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {jobsData.map((job) => (
          <JobCard key={job.title} job={job} />
        ))}
      </section>
    </div>
  );
}
