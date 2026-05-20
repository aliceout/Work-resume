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

const studyToBullets = (study) =>
  (study.description || [])
    .map((d) => d?.text)
    .filter((text) => typeof text === "string" && text.trim().length > 0);

export default function Studies({ studiesContent, themesContent }) {
  const { t } = useStaticTranslation("pages");
  const studies = studiesContent?.items || [];
  const themesMeta = buildThemesMeta(themesContent?.items);

  return (
    <PageContainer section="formations">
      <PageSeo
        title={t("studies.seo.title")}
        description={t("studies.seo.description")}
        path="/studies"
      />
      <PageHero section="formations" namespace="studies" />
      {studies.map((study, i) => (
        <TLEntry
          key={`${study.title}-${study.date}-${i}`}
          date={study.date}
          title={study.title}
          org={study.location}
          bullets={studyToBullets(study)}
          themes={study.themes}
          themesMeta={themesMeta}
        />
      ))}
    </PageContainer>
  );
}

export async function getStaticProps({ locale }) {
  const [studiesContent, themesContent] = await Promise.all([
    getSectionContent("studies", locale),
    getSectionContent("themes", locale),
  ]);

  return {
    props: {
      studiesContent,
      themesContent,
    },
  };
}
