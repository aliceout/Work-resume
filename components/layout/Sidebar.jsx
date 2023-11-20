import ThemedImage from "/components/images/ThemedImage";
import SideLink from "/components/links/SideLink";
import SideContact from "/components/contacts/SideContact";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-start ">
      <div className="sticky top-[130px] flex flex-col p-6 bg-white/90 dark:bg-slate-900/90 shadow-lg rounded-xl xl:basis-3/12 gap-y-6">
        <div className="flex flex-col items-center justify-center -mt-[130px] ">
          <ThemedImage
            lightImage="/profil-picture/color.jpg"
            darkImage="/profil-picture/bw.jpg"
            alt="Profil picture"
            width={200}
            height={200}
            className="rounded-full drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col text-center gap-y-2">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            Alice La Malice
          </p>
          <p className="py-1.5 text-lg font-medium rounded-lg text-slate-400 dark:text-gray-400 dark:bg-gray-800">
            Développeuse web
          </p>
        </div>
        <SideLink />
        <SideContact />
        <div className="flex justify-center">Download CV</div>
      </div>
    </aside>
  );
}
