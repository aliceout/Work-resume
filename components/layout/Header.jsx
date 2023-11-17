import {  useState } from "react";

import { BsTranslate } from "react-icons/bs";
import DarkMode from "/components/buttons/DarkMode";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="flex items-end justify-between h-28">
      <p className="font-satisfy text-4xl text-red-500">My resume</p>
      <div className="flex gap-x-4 text-xl">
        <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="flex bg-white/70 p-2 rounded-full">
          <BsTranslate />
        </div>
      </div>
    </header>
  );
}
