import ReactMarkdown from "react-markdown";

export default function StudyCard({ study }) {
  const bgColor = study.color;
  return (
    <article
      className="flex w-full p-4 rounded-lg divide-x divide-gray-300"
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
      <div className="flex flex-col gap-y-2">
        <p className=" text-lg text-sky-600/80 uppercase">{study.title}</p>
        <p>{study.location}</p>
        <p>{study.date}</p>
        <div className="flex flex-col">
          {study.description.map((item, index) => (
            <ReactMarkdown key={index} className={"mt-4"}>
              {item.text}
            </ReactMarkdown>
          ))}
        </div>
      </div>
    </article>
  );
}
