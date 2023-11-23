import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";
import { CircleFlag } from "react-circle-flags";

export default function LanguagesSwitcher() {
  const [flagsMenuIsOpen, setFlagsMenuIsOpen] = useState(false);  const { i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng); // i18n.changeLanguage retourne une Promise
  };

  const languages = [
    {
      title: "French",
      value: "fr",
      flag: "fr",
    },
    {
      title: "English",
      value: "en",
      flag: "uk",
    },
  ];

  return (
    <>
      <div
        className="flex p-2 duration-300 bg-white rounded-full cursor-pointer dark:bg-slate-900/90 dark:text-white"
        onClick={() => setFlagsMenuIsOpen(!flagsMenuIsOpen)}
      >
        <BsTranslate className="" />
      </div>
      <div
        className={`relative inline-flex flex-col top-14 -left-10 gap-y-4 transition duration-400 transform ease-in z-20 ${
          flagsMenuIsOpen ? "opacity-100" : "opacity-0"
        } `}
      >
        {languages.map((language) => (
          <CircleFlag
            key={language.title}
            countryCode={language.flag}
            className="h-5 transition transform rounded-full cursor-pointer hover:opacity-70 duration-400 "
            onClick={() => {
              setFlagsMenuIsOpen(false);
              changeLanguage(language.value);
            }}
          />
        ))}
      </div>
    </>
  );
}
