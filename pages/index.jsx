import H1 from "/components/titles/h1";
import AboutMe from "/components/aboutMe/AboutMe";
import PageSeo from "/components/seo/PageSeo";
import PersonSchema from "/components/seo/PersonSchema";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Home({ homeContent }) {
  const { t } = useStaticTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <PageSeo
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        path="/"
      />
      <PersonSchema
        jobTitle={t("home.seo.jobTitle")}
        description={t("home.seo.description")}
      />
      <H1 text={t("home.h1")} />
      <AboutMe homeContent={homeContent} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const homeContent = await getSectionContent("home", locale);

  return {
    props: {
      homeContent,
    },
  };
}
