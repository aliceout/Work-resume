import { BsTranslate } from "react-icons/bs";
import DarkModeBtn from "/components/buttons/DarkMode";
import LanguagesBtn from "/components/buttons/Languages";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="flex items-end justify-between mt-10">
      <p
        className={`text-4xl ${
          theme === "dark" ? "text-[#da5758]" : "text-[#73b6be]"
        } font-satisfy`}
      >
        My resume
      </p>
      <div className="flex text-xl gap-x-4">
        <DarkModeBtn />
        <LanguagesBtn />
      </div>
    </header>
  );
}
