import Image from "next/image";
import { useTheme } from "next-themes";

export default function Container({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      id="viewport"
      className="flex w-screen h-screen min-h-screen overflow-auto bg-center bg-cover min-w-screen "
    >
      <Image
        width={3840}
        height={2160}
        src="/background/toto.svg"
        alt="Description alternative"
        className="absolute -z-[100] bg-white dark:bg-slate-900 object-cover h-screen w-screen duration-300"
      />
      <div
        id="container"
        className="flex flex-col h-full bg-transparent min-w-screen xl:w-[1300px] mx-auto  select-none"
      >
        {children}
      </div>
    </div>
  );
}
