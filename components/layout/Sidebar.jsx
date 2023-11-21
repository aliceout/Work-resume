import ThemedImage from "/components/images/ThemedImage";
import SideLink from "/components/links/SideLink";
import SideContact from "/components/contacts/SideContact";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-start ">
      <div className="sticky flex flex-col p-6 duration-300 shadow-lg top-36 bg-white/80 dark:bg-black/70 rounded-xl xl:basis-3/12 gap-y-5 flex-0 min-h-max">
        <div className="flex flex-col items-center justify-center -mt-36">
          <ThemedImage
            lightImage="/profil-picture/color.jpg"
            darkImage="/profil-picture/bw.jpg"
            alt="Profil picture"
            width={200}
            height={200}
            className="rounded-full drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col text-center gap-y-1">
          <p className="text-2xl font-bold duration-300 text-slate-900 dark:text-white">
            Alice Aussel-Delamaide
          </p>
          <p className="py-1.5 text-lg font-medium rounded-lg text-slate-400 dark:text-gray-500 duration-300">
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
