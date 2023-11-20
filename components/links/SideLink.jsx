import { useIcons } from "/utils/context/IconsContext";
import SideLinksData from "/data/sideLinks";
import Link from "next/link";

export default function SideLink() {
  const ReactIcons = useIcons();

  const linksList = SideLinksData.map((link) => {
    const IconComponent = ReactIcons[link.icon];
    
    return (
      <Link
        key={link.href}
        href={link.href}
        className="flex flex-row items-center justify-center gap-4 p-3 bg-gray-100 rounded-lg dark:bg-slate-800 hover:bg-light-gradient hover:text-white group"
        style={{ color: link.color }}
      >
        <IconComponent className="group-hover:text-white" />
      </Link>
    );
  });

  return <ul className="flex justify-center gap-x-3">{linksList}</ul>;
}
