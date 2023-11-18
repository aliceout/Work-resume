import studiesData from "/data/studies";
import H1 from "/components/titles/h1";
import StudyCard from "/components/cards/StudyCard";

export default function Studies() {
  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white gap-y-6">
      <H1 text="Formations" />
      <section className="flex flex-col gap-y-6">
        {studiesData.map((study) => (
          <StudyCard key={study.function} study={study} />
        ))}
      </section>
    </div>
  );
}
