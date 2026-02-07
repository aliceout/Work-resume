import H1 from "/components/titles/h1";
import AboutMe from "/components/aboutMe/AboutMe";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Home({ homeContent }) {
  const { t } = useStaticTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
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
