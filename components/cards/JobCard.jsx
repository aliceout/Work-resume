import Image from "next/image";
import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import { MdOutlinePlace } from "react-icons/md";

export default function JobCard({ job }) {
  const { theme } = useTheme();

  return (
    <article
      className={`flex w-full p-4 `}
    >
      <div className="flex flex-col w-full gap-y-5">
        <div className="flex flex-row justify-between w-full gap-x-10">
          <div className="flex flex-col w-full basis-9/12">
            <p className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {job.company}
            </p>
            <p className="font-semibold text-primary dark:text-secondary">
              {job.title}
            </p>
            <div className="flex flex-row items-center justify-between mt-1">
              <p className="text-sm">{job.date}</p>
              <div className="flex flex-row items-center text-xs gap-x-2">
                <MdOutlinePlace />
                <p>{job.location}</p>
              </div>
            </div>
          </div>
          {theme !== "dark" && (
            <div className="flex items-center justify-center px-3 rounded-lg basis-3/12">
              <Image
                src={job.logo}
                alt={job.company}
                width={1000}
                height={1000}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col text-sm dark:text-gray-200 ">
          <ReactMarkdown>{job.description}</ReactMarkdown>
          {job.bullets && (
            <ReactMarkdown className="markdown-jobs">
              {job.bullets}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </article>
  );
}
