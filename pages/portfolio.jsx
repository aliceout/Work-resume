import PageSeo from "/components/seo/PageSeo";
import Band from "/components/proto/Band";
import PageContainer from "/components/proto/PageContainer";
import PageHero from "/components/proto/PageHero";
import ProjCard from "/components/proto/ProjCard";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

const buildThemesMeta = (themesItems) =>
  (themesItems || []).reduce((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

const adaptProject = (project) => ({
  title: project.title,
  org: project.client,
  year: project.date,
  desc: project.description,
  repo: project.repository,
  themes: project.themes,
  picture: project.picture,
});

const yearOf = (date) => {
  const m = (date || "").match(/\d{4}/);
  return m ? parseInt(m[0], 10) : 0;
};

const sortByDateDesc = (a, b) => yearOf(b.date) - yearOf(a.date);

export default function Portfolio({ portfolioContent, themesContent }) {
  const { t } = useStaticTranslation("pages");
  const projects = [...(portfolioContent?.projects || [])].sort(sortByDateDesc);
  const themesMeta = buildThemesMeta(themesContent?.items);

  return (
    <PageContainer section="portfolio">
      <PageSeo
        title={t("portfolio.seo.title")}
        description={t("portfolio.seo.description")}
        path="/portfolio"
      />
      <PageHero section="portfolio" namespace="portfolio" />
      <Band className="!py-0">
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjCard
              key={project.title}
              project={adaptProject(project)}
              index={i}
              themesMeta={themesMeta}
            />
          ))}
        </div>
      </Band>
    </PageContainer>
  );
}

export async function getStaticProps({ locale }) {
  const [portfolioContent, themesContent] = await Promise.all([
    getSectionContent("portfolio", locale),
    getSectionContent("themes", locale),
  ]);

  return {
    props: {
      portfolioContent,
      themesContent,
    },
  };
}
