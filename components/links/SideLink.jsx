import Link from "next/link";
import { useTheme } from "next-themes";
import { useGlobalContext } from "/utils/context/GlobalContext";
import { useIcons } from "/utils/context/IconsContext";
import externalLinks from "../../public/shared/external-links.json";

export default function SideLink() {
  const { isAliceOut } = useGlobalContext();
  const ReactIcons = useIcons();
  const { theme } = useTheme();

  const links = (externalLinks.items || []).filter(Boolean);

  const filteredLinks = isAliceOut
    ? links
    : links.filter((link) => link.name !== "Github");

  const linksList = filteredLinks.map((link) => {
    const IconComponent = ReactIcons[link.icon];

    return (
      <Link
        key={link.href}
        href={link.href}
        target="_blank"
        className="flex flex-row items-center px-8 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-slate-900 dark:text-gray-100 ring-1 ring-gray-100 dark:ring-slate-800 hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-700/90"
      >
        <IconComponent
          className="group-hover:text-white"
          style={
            theme === "dark"
              ? { color: link.darkColor }
              : { color: link.lightColor }
          }
        />
        <p className="text-slate-500 dark:text-gray-300">{link.name}</p>
      </Link>
    );
  });

  return (
    <div className="flex flex-row justify-center ml-6 gap-x-3 ">
      {linksList}
    </div>
  );
}
