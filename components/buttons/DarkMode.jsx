import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState();

  useEffect(() => {
    const checkTheme = () => {
      const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(colorScheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", checkTheme);

    // Appelez la fonction checkTheme au chargement de la page
    checkTheme();
    console.log("mode", mode);
    console.log("theme", theme);

    return () => {
      // Nettoyez le listener lorsque le composant est démonté
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", checkTheme);
    };
  }, []);

  return (
    <>
      {theme === "dark" ? (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 duration-300 rounded-full bg-slate-900/70"
        >
          <BsFillMoonStarsFill className="text-yellow-100" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 duration-300 bg-white rounded-full"
        >
          <MdSunny className="text-yellow-400 " />
        </button>
      )}
    </>
  );
}
