import { useState } from "react";
import Image from "next/image";
import ProjectModal from "/components/modals/ProjectModal";

export default function PortfolioCard({ project }) {
  const color = project.color;
  const bgColor = project.bgColor;

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <ProjectModal
        project={project}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <div
        className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
        style={{ backgroundColor: color }}
        onClick={() => setIsOpenModal(true)}
      >
        <div className="overflow-hidden rounded-lg">
          <Image
            className="w-full h-auto transition duration-200 ease-in-out transform rounded-lg cursor-pointer hover:scale-110 "
            src={project.cover}
            width={300}
            height={300}
            priority
            alt={project.title}
          />
        </div>
        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
          {project.tag}
        </span>
        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
          {project.title}
        </h2>
      </div>
    </>
  );
}
