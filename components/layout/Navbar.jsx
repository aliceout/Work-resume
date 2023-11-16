import navigation from "../../data/navigation";
import * as ReactIcons from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const items = navigation.map((item) => {
    const IconComponent = ReactIcons[item.icon];
    return (
      <Link
        key={item.name}
        href={item.href}
        className="flex flex-row items-center justify-center bg-gray-200  p-3 rounded-lg hover:bg-sky-700 hover:text-white gap-4"
      >
        <IconComponent width={100} height={100} />
        <p className="text-xs">{item.name}</p>
      </Link>
    );
  });

  return (
    <nav className="flex flex-col items-end ">
      <div className="flex bg-white items-center p-4 my-auto rounded-lg shadow-lg gap-x-4 text-slate-700 max-w-max">
        {items}
      </div>
    </nav>
  );
}