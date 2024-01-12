import { isAliceOut } from "/utils/context/GlobalContext";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";
import aboutMeData from "/data/aboutMe";

export default function AboutMe() {
  const { i18n } = useTranslation();

  // Get the data for the current language
  const currentLanguageData = filterDataByLanguage(aboutMeData, i18n.language);

  return (
    <div className="flex flex-col text-justify gap-y-3">
      {currentLanguageData.map((item, index) => {
        const content = isAliceOut ? item.dev : item.asso;
        // Vérifiez si le contenu n'est pas vide avant de rendre ReactMarkdown
        if (content && content.trim().length > 0) {
          return (
            <ReactMarkdown key={index} className="my-2 text-sm">
              {content}
            </ReactMarkdown>
          );
        }
        return null; // Retournez null pour les éléments à ne pas afficher
      })}
    </div>
  );
}
