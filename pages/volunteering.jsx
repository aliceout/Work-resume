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

export default function Volunteering({ volunteeringContent, themesContent }) {
  const { t } = useStaticTranslation("pages");
  const volunteering = volunteeringContent?.items || [];
  const themesMeta = buildThemesMeta(themesContent?.items);

  return (
    <PageContainer section="benevolat">
      <PageSeo
        title={t("volunteering.seo.title")}
        description={t("volunteering.seo.description")}
        path="/volunteering"
      />
      <PageHero section="benevolat" namespace="volunteering" />
      {volunteering.map((item, i) => (
        <TLEntry
          key={`${item.company}-${item.date}-${i}`}
          date={item.date}
          title={item.company}
          desc={item.description}
          bullets={item.bullets}
          themes={item.themes}
          themesMeta={themesMeta}
          side={item.location}
        />
      ))}
    </PageContainer>
  );
}

export async function getStaticProps({ locale }) {
  const [volunteeringContent, themesContent] = await Promise.all([
    getSectionContent("volunteering", locale),
    getSectionContent("themes", locale),
  ]);

  return {
    props: {
      volunteeringContent,
      themesContent,
    },
  };
}
