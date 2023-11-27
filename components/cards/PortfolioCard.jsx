import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";

import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function PortfolioCard({ project }) {
  const { t, i18n } = useTranslation("pages");

  return (
    <article className="flex flex-row items-center flex-1 w-full gap-x-10">
      <div className="flex flex-col justify-between transition duration-300 shadow xl:w-10/12 xl:overflow-visible xl:flex-row rounded-xl bg-gray-50/40 dark:bg-slate-900/80">
        <div className="flex flex-col justify-between w-full px-2 pt-8 pb-4 xl:pr-0 xl:pl-10 xl:py-8 xl:basis-10/12 basis-full">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row items-center justify-start gap-x-2">
              <p className="text-xl font-bold text-primary dark:text-secondary">
                {project.title}
              </p>
              <p className="text-xl font-medium text-black/80 dark:text-gray-300">
                {filterDataByLanguage(project.client, i18n.language)}
              </p>
            </div>
            <p className="mb-1 text-xs font-semibold text-gray-400 dark:text-gray-400">
              {project.date}
            </p>
            <div className="text-sm font-medium text-justify text-slate-800 dark:text-gray-300">
              <ReactMarkdown>
                {filterDataByLanguage(project.description, i18n.language)
                  .length > 0 &&
                  filterDataByLanguage(
                    project.description,
                    i18n.language
                  ).substring(0, 400)}
              </ReactMarkdown>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-4 gap-x-4 xl:justify-start xl:mt-0">
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-primary dark:text-secondary ring-1 ring-gray-200 dark:ring-black hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-900/90"
              >
                <CiSearch />
                {t("portfolio.btn.preview")}
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
              className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-slate-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-black hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-900/90"
            >
              <FaGithub />
              <p className="text-slate-500 dark:text-gray-300">Github</p>
            </Link>
          </div>
        </div>
        <div className="flex mx-auto md:mb-4 xl:my-10 xl:ml-4 xl:-mr-32 drop-shadow-lg rounded-xl">
          <Image
            src={project.picture}
            width={400}
            height={300}
            priority
            alt={project.title}
            className="w-full h-auto scale-100 rounded-xl "
          />
        </div>
      </div>
    </article>
  );
}

