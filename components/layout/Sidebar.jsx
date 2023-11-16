import Image from "next/image";
import { FaGithub } from "react-icons/fa";
export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg xl:basis-3/12 gap-y-6">
      <div className="flex flex-col items-center justify-center -mt-[130px] ">
        <Image
          src="/profil-picture/color.jpg"
          alt="Profil picture"
          width={200}
          height={200}
          className="rounded-xl drop-shadow-lg"
        />
      </div>
      <div className="flex flex-col text-center gap-y-2">
        <p className="text-2xl font-bold text-slate-900">
          Alice Aussel-Delamaide
        </p>
        <p className="text-lg font-medium text-slate-400">Développeuse web</p>
      </div>
      <ul className="flex justify-center gap-x-3">
        <li className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg">
          <FaGithub className="w-6 h-6" alt="github" />
        </li>
        <li className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg">
          <FaGithub className="w-6 h-6" />
        </li>
        <li className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg">
          <FaGithub className="w-6 h-6" />
        </li>
      </ul>
      <ul className="flex flex-col justify-center px-6 py-4 divide-y rounded-lg divide-gray-300/60 bg-gray-200/60 ">
        <li className="flex items-center justify-start pt-2 mb-2 gap-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ">
            <FaGithub className="w-6 h-6" alt="github" />
          </div>
          <div>
            <p>Title</p>
            <p>Contact</p>
          </div>
        </li>
        <li className="flex items-center justify-start pt-2 mb-2 gap-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ">
            <FaGithub className="w-6 h-6" alt="github" />
          </div>
          <div>
            <p>Title</p>
            <p>Contact</p>
          </div>
        </li>
        <li className="flex items-center justify-start pt-2 mb-2 gap-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ">
            <FaGithub className="w-6 h-6" alt="github" />
          </div>
          <div>
            <p>Title</p>
            <p>Contact</p>
          </div>
        </li>
      </ul>
      <div className="flex justify-center">Download CV</div>
    </aside>
  );
}
