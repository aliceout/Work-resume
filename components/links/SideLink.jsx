import * as ReactIcons from "react-icons/fa";
import Link from "next/link";


export default function SideLink({ link }) {
  console.log(link);
  const IconComponent = ReactIcons[link.icon];

  return (
    <Link
      key={link.href}
      href={link.href}
      className="flex flex-row items-center justify-center bg-gray-200  p-3 rounded-lg hover:bg-purple-200 hover:text-white gap-4"
      prefetch // Add prefetch prop for faster page loading
    >
      <IconComponent />
    </Link>
  );
}
