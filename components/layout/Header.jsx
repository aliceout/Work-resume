import Link from "next/link";
import DarkModeBtn from "/components/buttons/DarkMode";
import LanguagesBtn from "/components/buttons/Languages";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { useGlobalContext } from "/utils/context/GlobalContext";
import MobilMenu from "/components/layout/MobilMenu";

export default function Header() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useGlobalContext();

  return (
    <>
      {hamburgerMenuIsOpen && <MobilMenu />}
      <header className="flex items-end justify-between mx-6 mt-10 xl:mx-0">
        <Link href="/" className="text-4xl dark:text-[#da5758] text-[#73b6be] font-satisfy">
          My resume
        </Link>
        <div className="flex items-center text-xl gap-x-4">
          <DarkModeBtn />
          <LanguagesBtn />
          <button
            type="button"
            className="text-gray-400 md:hidden"
            onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
            aria-label="Open menu"
            aria-expanded={hamburgerMenuIsOpen}
            aria-controls="mobile-menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </>
  );
}
