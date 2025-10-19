import { useTranslation } from "react-i18next";
import H1 from "/components/titles/h1";
import VolunterCard from "/components/cards/VolunterCard";
import { getSectionContent } from "/utils/content";

export default function Volunteering() {
  const { t, i18n } = useTranslation("pages");
  const volunteeringContent = getSectionContent("volunteering", i18n.language);
  const volunteering = volunteeringContent?.items || [];

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("volunteering.h1")} />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {volunteering.map((job) => (
          <VolunterCard key={`${job.company}-${job.date}`} job={job} />
        ))}
      </section>
    </div>
  );
}

