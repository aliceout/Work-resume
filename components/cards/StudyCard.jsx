import ReactMarkdown from "react-markdown";

export default function StudyCard({ study }) {
  return (
    <article className="flex w-full p-4">
      <div className="flex flex-col">
        <p className="font-semibold text-primary dark:text-secondary">
          {study.title}
        </p>
        <div className="flex flex-row items-center text-gray-400 gap-x-3">
          <p>{study.date}</p>
          <p>·</p>
          <p>{study.location}</p>
        </div>

        <div className="flex flex-col text-sm lg:w-10/12">
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
