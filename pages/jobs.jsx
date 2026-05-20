import PageSeo from "/components/seo/PageSeo";
import PageContainer from "/components/proto/PageContainer";
import PageHero from "/components/proto/PageHero";
import TLEntry from "/components/proto/TLEntry";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

const buildThemesMeta = (themesItems) =>
  (themesItems || []).reduce((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

export default function Jobs({ jobsContent, themesContent }) {
  const { t } = useStaticTranslation("pages");
  const jobs = jobsContent?.items || [];
  const themesMeta = buildThemesMeta(themesContent?.items);
  const nowLabel = t("works.nowLabel");

  return (
    <PageContainer section="experiences">
      <PageSeo
        title={t("works.seo.title")}
        description={t("works.seo.description")}
        path="/jobs"
      />
      <PageHero section="experiences" namespace="works" />
      {jobs.map((job, i) => (
        <TLEntry
          key={`${job.company}-${job.date}-${i}`}
          date={job.date}
          current={job.current}
          title={job.title}
          org={job.company}
          desc={job.description}
          bullets={job.bullets}
          themes={job.themes}
          themesMeta={themesMeta}
          side={job.location}
          nowLabel={nowLabel}
        />
      ))}
    </PageContainer>
  );
}

export async function getStaticProps({ locale }) {
  const [jobsContent, themesContent] = await Promise.all([
    getSectionContent("jobs", locale),
    getSectionContent("themes", locale),
  ]);

  return {
    props: {
      jobsContent,
      themesContent,
    },
  };
}
