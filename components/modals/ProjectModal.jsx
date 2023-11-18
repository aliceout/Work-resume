import Image from "next/image";
import ModalBase from "/components/Modals//ModalBase";
import Link from "next/link";
import { SlClose } from "react-icons/sl";
import { IoIosCode } from "react-icons/io";
import { GrOverview } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

function removeHttps(url) {
  return url.replace("https://", "");
}

export default function Project({ project, isOpenModal, setIsOpenModal }) {
  return (
    <ModalBase isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <span className="flex justify-end mb-2 text-4xl text-white -mt-14 -mr-14 ">
        <button
          type="button"
          onClick={() => setIsOpenModal(false)}
          className="duration-150 hover:rotate-45 "
        >
          <SlClose className="" />
        </button>
      </span>
      <div className="flex flex-col flex-1 p-4 gap-y-6">
        <div>
          <p className="text-2xl font-bold text-center text-red-500 uppercase">
            {project.title}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-lg text-slate-900">
          <li className="flex items-center gap-x-3">
            <IoPersonOutline className="text-lg font-semibold text-slate-900" />
            <span className="flex font-medium">
              Client : &nbsp;
              <span className="font-semibold">{project.client}</span>
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <FaRegCalendarAlt className="text-lg font-semibold text-slate-900" />
            <span className="flex font-medium">
              Période : &nbsp;
              <span className="font-semibold">{project.date}</span>
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <IoIosCode className="text-lg font-semibold text-slate-900" />
            <span className="flex font-medium">
              Languages : &nbsp;
              <span className="font-semibold">{project.languages}</span>
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <GrOverview className="text-lg font-semibold text-slate-900" />
            <span className="flex font-medium">
              Aperçu : &nbsp;
              <span className="font-semibold">{removeHttps(project.url)}</span>
            </span>
          </li>
        </ul>
        <div>
          <p className="text-slate-900">{project.description}</p>
        </div>
        <div className="flex justify-center w-full min-w-full rounded-xl">
          <Image
            src={project.picture}
            width={1000}
            height={1000}
            className="rounded-xl"
            alt={project.title}
          />
        </div>
      </div>
    </ModalBase>
  );
}
