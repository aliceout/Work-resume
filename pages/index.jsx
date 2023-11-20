import ReactMarkdown from "react-markdown";

import H1 from "../components/titles/h1";
import aboutMe from "../data/aboutMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full h-full ">
      <H1 text="En deux mots" />
      <div className="flex flex-col text-justify gap-y-5">
        {aboutMe.map((item, index) => (
          <ReactMarkdown key={index}>{item.text}</ReactMarkdown>
        ))}
      </div>
    </div>
  );
}
