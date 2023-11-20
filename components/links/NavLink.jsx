import { useIcons } from "/utils/context/IconsContext";
import Link from "next/link";

export default function NavLink({ item }) {
  const ReactIcons = useIcons();
  const IconComponent = ReactIcons[item.icon];

  return (
    <Link
      href={item.href}
      className="flex flex-row items-center justify-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-purple-200 hover:text-white dark:bg-slate-800 dark:text-gray-300 hover:bg-light-gradient"
    >
      <IconComponent />
      <p className="text-xs">{item.name}</p>
    </Link>
  );
}
