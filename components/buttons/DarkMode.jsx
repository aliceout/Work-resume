import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsTranslate } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 rounded-full bg-slate-900/70"
        >
          <BsFillMoonStarsFill className="text-yellow-400" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 rounded-full bg-white/70"
        >
          <MdSunny className="text-yellow-400 " />
        </button>
      )}
    </>
  );
}
