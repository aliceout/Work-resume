import * as ReactIcons from "react-icons/fa";
import Link from "next/link";

export default function NavLink({ item }) {
  const IconComponent = ReactIcons[item.icon];

  return (
    <Link
      href={item.href}
      className="flex flex-row items-center justify-center bg-gray-100  p-3 rounded-lg hover:bg-purple-200 hover:text-white gap-4"
      prefetch // Add prefetch prop for faster page loading
    >
      <IconComponent />
      <p className="text-xs">{item.name}</p>
    </Link>
  );
}
