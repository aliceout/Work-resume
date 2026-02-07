import H1 from "/components/titles/h1";
import PortfolioCard from "/components/cards/PortfolioCard";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Portfolio({ portfolioContent }) {
  const { t } = useStaticTranslation("pages");
  const projects = portfolioContent?.projects || [];

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

export async function getStaticProps({ locale }) {
  const portfolioContent = await getSectionContent("portfolio", locale);

  return {
    props: {
      portfolioContent,
    },
  };
}

