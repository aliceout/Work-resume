import Image from "next/image";
import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import { MdOutlinePlace } from "react-icons/md";

export default function VolunterCard({ job }) {
  const { theme } = useTheme();

  return (
    <article className="flex w-full p-4">
      <div className="flex flex-col w-full gap-y-5">
        <div className="flex flex-row justify-between w-full gap-x-10">
          <div className="flex flex-col w-fullbasis-7/12 md:basis-9/12 ">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {job.company}
            </h3>
            <div className="flex flex-col justify-between mt-1 md:items-center md:flex-row">
              <p className="text-sm">{job.date}</p>
              <div className="flex flex-row-reverse items-center justify-end text-xs md:flex-row gap-x-2 md:justify-center">
                <MdOutlinePlace />
                <p>{job.location}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-3 overflow-hidden rounded-lg basis-5/12 md:basis-3/12">
            <Image
              src={job.logo}
              alt={job.company}
              width={450}
              height={300}
              style={{
                width: "100% !important",
                position: "relative !important",
                height: "unset !important",
              }}
              className="w-full h-auto rounded-lg dark:brightness-75 "
            />
          </div>
        </div>
        <div className="flex flex-col text-sm dark:text-gray-200 gap-y-2 lg:w-10/12">
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
