import { useState } from "react";
import Image from "next/image";
import ProjectModal from "/components/modals/ProjectModal";

export default function PortfolioCard({ project }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <ProjectModal
        project={project}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <div className="px-6 " onClick={() => setIsOpenModal(true)}>
        <div
          className="flex flex-col px-6 py-5 rounded-lg bg-gray-50/70 dark:bg-slate-900 gap-y-4"
          // style={{ backgroundColor: project.cardColor }}
        >
          <div
            className="px-16 py-1 overflow-hidden rounded-xl"
            style={{ backgroundColor: project.borderColor, paddingTop: project.borderY,paddingBottom: project.borderY }}
          >
            <Image
              className="w-full h-auto transition duration-200 ease-in-out transform rounded-lg cursor-pointer hover:scale-110 "
              src={project.cover}
              width={300}
              height={300}
              priority
              alt={project.title}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-normal text-slate-500 ">
              {project.client}
            </p>
            <p className="text-lg font-semibold text-slate-700 ">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
