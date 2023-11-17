import H1 from "/components/titles/h1";
import portfolio from "/data/portfolio";
import PortfolioCard from "/components/cards/Portfolio";

export default function Portfolio() {
  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white gap-y-6">
      <H1 text="Portfolio" />
      <div className="grid grid-cols-2 gap-6 ">
        {portfolio.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
