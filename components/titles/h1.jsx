import { useTheme } from "next-themes";

export default function H1({ text }) {

  const { theme } = useTheme();
  
  return (
    <div className="relative h-[80px] flex items-end">
      <div className="absolute top-0 z-10 transform -translate-x-1/2 left-2">
        <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-dark-gradient' : 'bg-light-gradient'} animate-bubble`}></div>
      </div>
      <h1 className="relative z-20 mt-6 ml-3 text-4xl font-bold dark:text-white">{text}</h1>
    </div>
  );
}
