import { BsTranslate } from "react-icons/bs";
import DarkModeBtn from "/components/buttons/DarkMode";

export default function Header() {

  return (
    <header className="flex items-end justify-between mt-10">
      <p className="text-4xl text-red-500 font-satisfy">My resume</p>
      <div className="flex text-xl gap-x-4">
        <DarkModeBtn />
        <div className="flex p-2 rounded-full bg-white/70">
          <BsTranslate />
        </div>
      </div>
    </header>
  );
}
