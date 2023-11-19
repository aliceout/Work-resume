import { useIcons } from "/utils/context/IconsContext";
import Link from "next/link";

export default function SideContact({ contact }) {
  const ReactIcons = useIcons();
  const IconComponent = ReactIcons[contact.icon];

  return (
    <Link
      href={contact.href}
      className="flex items-center justify-start pt-2 mb-2 gap-x-2"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ">
        <IconComponent alt={contact.name} />
      </div>
      <div>
        <p className="text-xs font-semibold text-tiny text-slate-500">
          {contact.fieldset}
        </p>
        <p className="font-semibold text-slate-900">{contact.value}</p>
      </div>
    </Link>
  );
}
