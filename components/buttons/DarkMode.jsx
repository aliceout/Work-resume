import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useTheme } from "next-themes";
const BsFillMoonStarsFill = dynamic(
  () =>
    import("@react-icons/all-files/bs/BsMoon").then(
      (module) => module.BsMoon
    ),
  { ssr: false }
);
const MdSunny = dynamic(
  () =>
    import("@react-icons/all-files/md/MdWbSunny").then(
      (module) => module.MdWbSunny
    ),
  { ssr: false }
);

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkThemeMq.addEventListener("change", handleChange);

    // Appelez la fonction handleChange au chargement de la page
    handleChange(darkThemeMq);

    return () => {
      // Nettoyez le listener lorsque le composant est démonté
      darkThemeMq.removeEventListener("change", handleChange);
    };
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex p-2 duration-300 bg-white rounded-full dark:bg-slate-900/70"
    >
      {theme === "dark" ? (
        <>
          <BsFillMoonStarsFill className="text-yellow-100" />
          {/* <span className="sr-only">DarkMode</span> */}
        </>
      ) : (
        <>
          <MdSunny className="text-yellow-400" />
          {/* <span className="sr-only">LightMode</span> */}
        </>
      )}
    </button>
  );
}
