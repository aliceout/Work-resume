import H1 from "../components/titles/h1";
import aboutMe from "../data/aboutMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white">
      <H1 text="En deux mots" />
      <p>{aboutMe[0].text}</p>
    </div>
  );
}
