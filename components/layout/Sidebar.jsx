import Image from "next/image";
import SideLinksData from "/data/sideLinks";
import SideContactsData from "/data/sideContacts";
import SideLink from "/components/links/SideLink";
import SideContact from "/components/contacts/SideContact";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-start ">
      <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg xl:basis-3/12 gap-y-6">
        <div className="flex flex-col items-center justify-center -mt-[130px] ">
          <Image
            src="/profil-picture/color.jpg"
            alt="Profil picture"
            width={200}
            height={200}
            className="rounded-full drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col text-center gap-y-2">
          <p className="text-2xl font-bold text-slate-900">Alice La Malice</p>
          <p className="text-lg font-medium text-slate-400">Développeuse web</p>
        </div>
        <ul className="flex justify-center gap-x-3">
          {SideLinksData.map((link) => (
            <SideLink key={link.name} link={link} />
          ))}
        </ul>
        <ul className="flex flex-col justify-center px-4 py-4 divide-y rounded-lg divide-gray-300/60 bg-gray-50 ">
          {SideContactsData.map((contact) => (
            <SideContact key={contact.name} contact={contact} />
          ))}
        </ul>
        <div className="flex justify-center">Download CV</div>
      </div>
    </aside>
  );
}
