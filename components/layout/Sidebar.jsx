import Link from "next/link";
import { useGlobalContext } from "/utils/context/GlobalContext";
import ProfilPicture from "/components/images/ProfilPicture";
import SideLink from "/components/links/SideLink";
import SideContact from "/components/contacts/SideContact";
import { IoCloudDownload } from "@react-icons/all-files/io5/IoCloudDownload";
import { SiProtonmail } from "@react-icons/all-files/si/SiProtonmail";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Sidebar() {
  const { setHamburgerMenuIsOpen, isAliceOut } = useGlobalContext();
  const { t } = useStaticTranslation("sidebar");

  return (
    <aside className="w-full mx-auto md:w-4/6 lg:basis-3/12">
      <div className="sticky flex flex-col w-full py-3 mb-auto duration-300 shadow-lg md:p-6 top-44 bg-white/80 dark:bg-black/70 rounded-xl gap-y-3 md:gap-y-5">
        <div className="flex flex-row items-center justify-center md:flex-col">
          <ProfilPicture />
          <div className="flex flex-col w-6/12 text-center md:w-full gap-y-1">
            <p className="text-2xl font-bold duration-300 text-slate-900 dark:text-white">
              Alice Aussel Delamaide
            </p>
            <p className="py-1.5 text-lg font-medium rounded-lg text-slate-400 dark:text-gray-500 duration-300">
              {isAliceOut ? t("fonctionDev") : t("fonctionAsso")}
            </p>
          </div>
        </div>
        <SideLink />
        <span className="hidden md:flex">
          <SideContact />
        </span>
        <div className="flex flex-row justify-center gap-x-3">
          <Link
            href="https://cloud.alyss.cc/s/pbHLqQa3gnK2Lrp"
            target="_blank"
            className="flex flex-row items-center px-6 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-secondary dark:text-primary ring-1 ring-gray-100 dark:ring-slate-800 hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-700/90"
          >
            <IoCloudDownload />
            {t("downloadBtn")}
          </Link>

          <button
            type="button"
            onClick={() => setHamburgerMenuIsOpen(true)}
            className="flex flex-row items-center px-6 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm md:hidden dark:bg-gray-800/90 text-[#6d4aff]  ring-1 ring-gray-100 dark:ring-slate-800 hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-700/90"
          >
            <SiProtonmail />
            {t("contactBtn")}
          </button>
        </div>
      </div>
    </aside>
  );
}
