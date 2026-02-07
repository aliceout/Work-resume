import H1 from "/components/titles/h1";
import Certifications from "/components/skills/Certifications";
import Languages from "/components/skills/Languages";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Skills({ skillsContent }) {
  const { t } = useStaticTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("skills.h1")} />
      <Certifications skillsContent={skillsContent} />
      <Languages skillsContent={skillsContent} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const skillsContent = await getSectionContent("skills", locale);

  return {
    props: {
      skillsContent,
    },
  };
}
