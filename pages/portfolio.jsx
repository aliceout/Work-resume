import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BiSolidCategoryAlt } from "react-icons/bi";
import H1 from "/components/titles/h1";
import PortfolioCard from "/components/cards/PortfolioCard";
import portfolioData from "/data/portfolio";

export default function Portfolio() {
  const { t } = useTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-10">
      <H1 text={t("portfolio.h1")} />
      <section className="flex items-center justify-between w-10/12 p-5 pl-10 shadow rounded-xl bg-gray-50/40 dark:bg-slate-900/80 ">
        {t("portfolio.message")}{" "}
        <Link
          href={"https://aliceout.dev"}
          target="_blank"
          className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-slate-900 dark:text-gray-100 ring-1 ring-gray-100 dark:ring-slate-800 hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-700/90"
        >
          <BiSolidCategoryAlt
            className="group-hover:text-white text-primary dark:text-secondary"
          />
          <p className="text-slate-500 dark:text-gray-300">Portfolio</p>
        </Link>
      </section>
      <section className="flex flex-col gap-y-10 dark:divide-gray-400">
        {portfolioData.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
