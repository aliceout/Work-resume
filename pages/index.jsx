import H1 from "/components/titles/h1";
import AboutMe from "/components/aboutMe/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-6">
      <H1 text="En deux mots" />
      <AboutMe />
    </div>
  );
}
