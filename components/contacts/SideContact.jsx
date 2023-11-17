import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Link from "next/link";

const allIcons = {
  ...MdIcons,
  ...FaIcons,
};

export default function SideContact({ contact }) {
  const IconComponent = allIcons[contact.icon];
  return (
    <Link
      href={contact.href}
      className="flex items-center justify-start pt-2 mb-2 gap-x-2"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ">
        <IconComponent alt={contact.name} />
      </div>
      <div>
        <p className=" text-xs text-tiny font-semibold text-slate-500">{contact.fieldset}</p>
        <p className="text-slate-900 font-semibold">{contact.value}</p>
      </div>
    </Link>
  );
}
