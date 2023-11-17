import ReactMarkdown from "react-markdown";

import H1 from "../components/titles/h1";
import aboutMe from "../data/aboutMe";
console.log(aboutMe);

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white">
      <H1 text="En deux mots" />
      <div className="flex flex-col gap-y-5 text-justify">
        {aboutMe.map((item, index) => (
          <ReactMarkdown key={index}>{item.text}</ReactMarkdown>
        ))}
      </div>
    </div>
  );
}
