import { useTheme } from "next-themes";
import { BsTranslate } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function DarkMode() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex p-2 duration-300 rounded-full  ${theme === "dark" ? " bg-slate-900/90 text-white" : " bg-white"}`}
    >
      <BsTranslate className="" />
    </div>
  );
}
