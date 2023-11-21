import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

export default function PortfolioCard({ project }) {
  return (
    <article className="flex flex-row items-center flex-1 w-full gap-x-10">
      <div className="flex flex-row justify-between w-10/12 overflow-visible transition duration-300 shadow rounded-xl bg-gray-50/40 dark:bg-slate-900/80">
        <div className="flex flex-col justify-between w-full py-8 pl-10 pr-0 basis-7/12 ">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row items-center justify-start gap-x-2">
              <p className="text-xl font-bold text-primary dark:text-secondary">
                {project.title}
              </p>
              <p className="text-xl font-medium text-black/80 dark:text-gray-300">
                ({project.client})
              </p>
            </div>
            <p className="mb-1 text-xs font-semibold text-gray-400 dark:text-gray-400">
              {project.date}
            </p>
            <p className="text-sm font-medium text-justify text-slate-800 dark:text-gray-300">
              <ReactMarkdown>
                {project.description.substring(0, 400)}
              </ReactMarkdown>
            </p>
          </div>
          <div className="flex flex-row gap-x-4">
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white shadow-sm dark:bg-gray-800/90 rounded-xl text-primary dark:text-secondary ring-1 ring-gray-200 dark:ring-black hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-900/90 "
              >
                <CiSearch />
                Aperçu
              </Link>
            )}
            {/* <button
              type="button"
              className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white shadow-sm dark:bg-gray-800/90 rounded-xl text-slate-600 dark:text-gray-400 ring-1 ring-gray-200 dark:ring-black hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-900/90 "
            >
              <TbListDetails />
              Détails
            </button> */}
            <Link
              target="_blank"
              href={project.repository}
              className="flex flex-row items-center px-3 py-2 text-sm font-bold transition duration-300 bg-white shadow-sm dark:bg-gray-800/90 rounded-xl text-slate-900 ring-1 ring-gray-200 dark:ring-black hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-900/90 dark:text-white "
            >
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="flex my-10 -mr-36 drop-shadow-lg rounded-xl">
          <Image
            src={project.picture}
            width={400}
            height={700}
            priority
            alt={project.title}
            className="scale-100 rounded-xl"
          />
        </div>
      </div>
    </article>
  );
}
