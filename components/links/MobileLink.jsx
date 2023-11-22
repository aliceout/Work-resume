import Link from "next/link";
import { useIcons } from "/utils/context/IconsContext";
import linksData from "/data/links";
import { useGlobalContext } from "/utils/context/GlobalContext";

export default function MobileLink() {
  const { setHamburgerMenuIsOpen } = useGlobalContext();

  const ReactIcons = useIcons();

  const navLinks = linksData.map((item) => {
    const IconComponent = ReactIcons[item.icon];
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setHamburgerMenuIsOpen(false)}
        className="flex flex-row items-center justify-start gap-4 p-3 duration-300 rounded-lg hover:text-slate-500 dark:text-gray-300 dark:hover:bg-dark-gradient hover:bg-light-gradient"
      >
        <IconComponent />
        <p className="text-sm font-semibold test-slate-600">{item.name}</p>
      </Link>
    );
  });

  return (
    <div className="flex flex-col px-4 duration-300 gap-y-1 max-w-max">
      <p className="px-3 font-semibold ">Liens</p>
      {navLinks}
    </div>
  );
}
