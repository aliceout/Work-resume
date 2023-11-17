import jobsData from "/data/jobs";
import H1 from "/components/titles/h1";
import JobCard from "/components/cards/Job";

export default function Jobs() {
  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white gap-y-6">
      <H1 text="Experiences" />
      <section className="flex flex-col gap-y-6">
        {jobsData.map((job) => (
          <JobCard key={job.function} job={job} />
        ))}
      </section>
    </div>
  );
}
