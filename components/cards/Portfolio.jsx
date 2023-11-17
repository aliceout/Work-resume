import Image from "next/image";

export default function PortfolioCard({ project }) {
      const bgColor = project.color;

  return (
    <article
      className=" p-8 basis-1/2 flex flex-col rounded-lg"
      style={{
        backgroundColor: `rgba(${parseInt(
          bgColor.slice(-6, -4),
          16
        )}, ${parseInt(bgColor.slice(-4, -2), 16)}, ${parseInt(
          bgColor.slice(-2),
          16
        )}, 0.2)`,
      }}
    >
      <div className="flex flex-1">
        <Image
          width={1000}
          height={1000}
          src={project.picture}
          alt={project.title}
          className="flex-1 grow w-full rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <p>{project.client}</p>
        <p>{project.title}</p>
      </div>
    </article>
  );
}
