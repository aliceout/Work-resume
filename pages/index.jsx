import { useTranslation } from "react-i18next";
import H1 from "/components/titles/h1";
import AboutMe from "/components/aboutMe/AboutMe";

export default function Home() {
  const { t } = useTranslation("pages");

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text={t("home.h1")} />
      <AboutMe />
    </div>
  );
}
