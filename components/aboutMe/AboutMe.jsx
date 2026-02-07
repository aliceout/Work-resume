import { useGlobalContext } from "/utils/context/GlobalContext";
import ReactMarkdown from "react-markdown";
import { useSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function AboutMe() {
  const { isAliceOut } = useGlobalContext();
  const { i18n } = useStaticTranslation();
  const homeContent = useSectionContent("home", i18n.language);
  const key = isAliceOut ? "dev" : "asso";
  const paragraphs = homeContent?.about?.[key] || [];

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
