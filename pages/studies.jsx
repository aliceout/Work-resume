import H1 from "/components/titles/h1";
import StudyCard from "/components/cards/StudyCard";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Studies({ studiesContent }) {
  const { t } = useStaticTranslation("pages");
  const studies = studiesContent?.items || [];

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("studies.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {studies.map((study) => (
          <StudyCard key={`${study.title}-${study.date}`} study={study} />
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const studiesContent = await getSectionContent("studies", locale);

  return {
    props: {
      studiesContent,
    },
  };
}

