import Link from "next/link";

import { useIcons } from "/utils/context/IconsContext";
import { useGlobalContext } from "/utils/context/GlobalContext";
import { useStaticTranslation } from "/utils/translations/useTranslations";
import navLinksData from "../../public/shared/nav-links.json";

export default function MobileLink() {
  const { setHamburgerMenuIsOpen } = useGlobalContext();
  const { t: tNavbar } = useStaticTranslation("navbar");
  const { t: tMobileMenu } = useStaticTranslation("mobileMenu");
  const ReactIcons = useIcons();
  const navLinks = navLinksData.items || [];

  const navLinksElements = navLinks.map((item) => {
    const IconComponent = ReactIcons[item.icon];
    return (
      <Link
        key={item.icon}
        href={item.href}
        onClick={() => setHamburgerMenuIsOpen(false)}
        className="flex flex-row items-center justify-start gap-4 p-3 duration-300 rounded-lg hover:text-slate-500 dark:text-gray-300 dark:hover:bg-dark-gradient hover:bg-light-gradient"
      >
        <IconComponent />
        <p className="text-sm font-semibold text-slate-600">
          {tNavbar(item.nameTransKey)}
        </p>
      </Link>
    );
  });

  return (
    <div className="flex flex-col px-4 duration-300 gap-y-1 max-w-max">
      <p className="px-3 font-semibold ">
        {tMobileMenu("links")}
      </p>
      {navLinksElements}
    </div>
  );
}
