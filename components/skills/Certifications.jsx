import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { filterDataByLanguage } from "/utils/tools/languages";
import Image from "next/image";
import H2 from "/components/titles/h2";
import certifications from "/data/certifications";

export default function Certifications() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation("pages");

  const certifs = certifications.map((certif) => {

    return (
      <div
        key={filterDataByLanguage(certif.title, i18n.language)}
        className="flex flex-row items-center gap-x-4"
      >
        <div className="overflow-hidden h-[75px] w-auto aspect-square flex items-center justify-center basis-3/12">
          <Image
            src={theme === "dark" ? certif.logoDark : certif.logo}
            alt={filterDataByLanguage(certif.title, i18n.language)}
            width={70}
            height={70}
            className="w-auto max-h-[75px] "
          />
        </div>
        <div className="flex flex-col text-sm basis-9/12">
          <p className="font-semibold text-slate-700 dark:text-slate-100">
            {filterDataByLanguage(certif.title, i18n.language)}
          </p>
          <p className="italic font-medium text-slate-600 dark:text-slate-300">
            {filterDataByLanguage(certif.place, i18n.language)}
          </p>
          <p className="font-tiny text-slate-500 dark:text-slate-400">
            {certif.date}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H2 text={t("skills.certifications.h2")} />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl: xl:grid-cols-2 dark:divide-gray-400">
        {certifs}
      </section>
    </div>
  );
}
