import { useState } from "react";
import Image from "next/image";
import H1 from "/components/titles/h1";
import portfolioData from "/data/portfolio";
import PortfolioCard from "/components/cards/PortfolioCard";
import Masonry from "react-masonry-css";


export default function Portfolio() {
  const [isOpenModal, setIsOpenModal] = useState(false);

    const breakpointColumnsObj = {
      default: 2,
      1100: 2,
      500: 1,
    };

  return (
    <div className="flex flex-col flex-1 w-full h-full text-black bg-white">
      <H1 text="Portfolio" />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {portfolioData.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </Masonry>
    </div>
  );
}
