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
          className="flex flex-col px-6 py-5 rounded-lg gap-y-4 "
          style={{ backgroundColor: project.cardColor }}
        >
          <div
            className="p-3 overflow-hidden rounded-xl"
            style={{ backgroundColor: project.borderColor }}
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
          <div className="flex flex-col gap-y-1">
            <p className="text-lg font-medium text-slate-500 ">
              {project.client}
            </p>
            <p className="text-xl font-semibold text-slate-700 ">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
