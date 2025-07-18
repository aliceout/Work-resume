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
      <section className="flex flex-col gap-y-10 dark:divide-gray-400">
        {portfolioData.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
