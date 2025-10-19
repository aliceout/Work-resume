import { useGlobalContext } from "/utils/context/GlobalContext";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { isAliceOut } = useGlobalContext();
  const { t } = useTranslation("content/home");
  const key = isAliceOut ? "about.dev" : "about.asso";
  const rawParagraphs = t(key, { returnObjects: true });
  const paragraphs = Array.isArray(rawParagraphs) ? rawParagraphs : [];

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
