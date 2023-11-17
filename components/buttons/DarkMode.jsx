import { BsFillMoonStarsFill, BsTranslate } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function DarkMode({ isDarkMode, setIsDarkMode }) {
    console.log(isDarkMode);
  return (
    <>
      {isDarkMode ? (
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex bg-slate-900/70 p-2 rounded-full"
        >
          <BsFillMoonStarsFill className="text-yellow-400" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex bg-white/70 p-2 rounded-full"
        >
          <MdSunny className="text-yellow-400 " />
        </button>
      )}
    </>
  );
}
