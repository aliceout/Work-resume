import { useTranslation } from "react-i18next";
import H1 from "/components/titles/h1";
import PortfolioCard from "/components/cards/PortfolioCard";

export default function Portfolio() {
  const { t } = useTranslation("pages");
  const { t: tContent } = useTranslation("content/portfolio");
  const rawProjects = tContent("projects", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-10">
      <H1 text={t("portfolio.h1")} />
      <section className="flex flex-col gap-y-10 dark:divide-gray-400">
        {projects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
