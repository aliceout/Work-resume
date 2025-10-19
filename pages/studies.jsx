import { useTranslation } from "react-i18next";

import H1 from "/components/titles/h1";
import StudyCard from "/components/cards/StudyCard";

export default function Studies() {
  const { t } = useTranslation("pages");
  const { t: tContent } = useTranslation("content/studies");
  const rawStudies = tContent("items", { returnObjects: true });
  const studies = Array.isArray(rawStudies) ? rawStudies : [];

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
