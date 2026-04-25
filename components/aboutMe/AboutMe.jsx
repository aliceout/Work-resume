import ReactMarkdown from "react-markdown";

export default function AboutMe({ homeContent }) {
  const paragraphs = homeContent?.about || [];

  return (
    <div className="flex flex-col px-4 text-justify gap-y-3">
      {paragraphs
        .filter((content) => typeof content === "string" && content.trim().length > 0)
        .map((content, index) => (
          <ReactMarkdown key={index} className="my-2 text-sm">
            {content}
          </ReactMarkdown>
        ))}
    </div>
  );
}
