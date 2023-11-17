export default function JobCard({ job }) {
  const bgColor = job.color;
  return (
    <article
      className={`flex w-full p-4 rounded-lg divide-x divide-gray-300`}
      style={{
        backgroundColor: `rgba(${parseInt(
          bgColor.slice(-6, -4),
          16
        )}, ${parseInt(bgColor.slice(-4, -2), 16)}, ${parseInt(
          bgColor.slice(-2),
          16
        )}, 0.2)`,
      }}
    >
      <div className="flex flex-col basis-3/12 gap-y-2">
        <p className="font-bold text-xl text-slate-800">{job.title}</p>
        <p>{job.location}</p>
        <p>{job.date}</p>
      </div>
      <div className="flex flex-col basis-9/12 pl-4 gap-y-2">
        <p className="font-bold text-xl text-slate-800">{job.company}</p>
        <p>{job.description}</p>
      </div>
    </article>
  );
}
