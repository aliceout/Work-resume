import studiesData from "/data/studies";
import H1 from "/components/titles/h1";
import StudyCard from "/components/cards/StudyCard";

export default function Studies() {
  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text="Formations" />
      <section className="flex flex-col divide-y divide-gray-300 gap-y-3 dark:divide-gray-400">
        {studiesData.map((study) => (
          <StudyCard key={study.title} study={study} />
        ))}
      </section>
    </div>
  );
}
