import Link from "next/link";
import { useTheme } from "next-themes";
import { useIcons } from "/utils/context/IconsContext";
import SideLinksData from "/data/sideLinks";

export default function SideLink() {
  const ReactIcons = useIcons();
  const { theme } = useTheme();

  const linksList = SideLinksData.map((link) => {
    const IconComponent = ReactIcons[link.icon];

    return (
      <Link
        key={link.href}
        href={link.href}
        target="_blank"
        className="flex flex-row items-center justify-center gap-4 p-3 duration-300 bg-gray-100 rounded-lg dark:bg-gray-900 hover:bg-light-gradient hover:text-white group dark:hover:bg-dark-gradient"
        style={
          theme === "dark"
            ? { color: link.darkColor }
            : { color: link.lightColor }
        }
      >
        <IconComponent className="group-hover:text-white" />
      </Link>
    );
  });

  return <ul className="flex justify-center gap-x-3">{linksList}</ul>;
}
