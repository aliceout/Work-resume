import ReactMarkdown from "react-markdown";
import aboutMeData from "/data/aboutMe";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-justify gap-y-3">
      {aboutMeData.map((item, index) => (
        <ReactMarkdown key={index} className="my-2 text-sm">
          {item.text}
        </ReactMarkdown>
      ))}
    </div>
  );
}
