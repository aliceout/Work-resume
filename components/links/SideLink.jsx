import { useIcons } from "/utils/context/IconsContext";
import Link from "next/link";

export default function SideLink({ link }) {
  const ReactIcons = useIcons();
  const IconComponent = ReactIcons[link.icon];

  return (
    <Link
      key={link.href}
      href={link.href}
      className="flex flex-row items-center justify-center gap-4 p-3 bg-gray-100 rounded-lg hover:bg-purple-200 hover:text-white"
      prefetch // Add prefetch prop for faster page loading
    >
      <IconComponent />
    </Link>
  );
}
