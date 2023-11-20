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
        width={1920}
        height={1080}
        src="/background/toto.svg"
        alt="Description alternative"
        className="absolute -z-[1] bg-white dark:bg-black object-cover "
      />
      <div
        id="container"
        className="flex flex-col h-full bg-transparent min-w-screen xl:w-[1300px] mx-auto"
      >
        {children}
      </div>
    </div>
  );
}
