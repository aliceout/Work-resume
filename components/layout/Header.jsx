import DarkModeBtn from "/components/buttons/DarkMode";
import LanguagesBtn from "/components/buttons/Languages";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "/utils/context/GlobalContext";
import MobilMenu from "/components/layout/MobilMenu";

export default function Header() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useGlobalContext();

  return (
    <>
      {hamburgerMenuIsOpen && <MobilMenu />}
      <header className="flex items-end justify-between mx-6 mt-10 xl:mx-0">
        <p className="text-4xl dark:text-[#da5758] text-[#73b6be] font-satisfy">
          My resume
        </p>
        <div className="flex items-center text-xl gap-x-4">
          <DarkModeBtn />
          <LanguagesBtn />
          <GiHamburgerMenu
            className="text-gray-400 md:hidden"
            onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
          />
        </div>
      </header>
    </>
  );
}
