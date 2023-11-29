import { useTranslation } from "react-i18next";
import H1 from "/components/titles/h1";
import Certifications from "/components/skills/Certifications";
import Languages from "/components/skills/Languages";

export default function Skills() {
    const { t } = useTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("skills.h1")} />
      <Certifications />
      <Languages />
    </div>
  );
}
