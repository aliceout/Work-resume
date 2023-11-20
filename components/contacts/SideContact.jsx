import SideContactsData from "/data/sideContacts";
import { useIcons } from "/utils/context/IconsContext";
import Link from "next/link";

export default function SideContact() {
  const ReactIcons = useIcons();

  const contactsList = SideContactsData.map((contact) => {
    const IconComponent = ReactIcons[contact.icon];

    return (
      <Link
        key={contact.href}
        href={contact.href}
        className="flex items-center justify-start pt-2 mb-2 gap-x-2"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md dark:bg-slate-900 ">
          <IconComponent alt={contact.name} />
        </div>
        <div>
          <p className="text-xs font-semibold text-tiny text-slate-500 dark:text-slate-300">
            {contact.fieldset}
          </p>
          <p className="font-semibold text-slate-900 dark:text-slate-200">{contact.value}</p>
        </div>
      </Link>
    );
  });

  return <ul className="flex flex-col justify-center px-4 py-4 divide-y rounded-lg divide-gray-300/60 bg-gray-50/70 dark:bg-slate-800 ">{contactsList} </ul>
}