import Link from "next/link";
import { useTheme } from "next-themes";
import { useIcons } from "/utils/context/IconsContext";
import SideContactsData from "/data/sideContacts";

export default function SideContact() {
  const ReactIcons = useIcons();
  const { theme } = useTheme();

  const contactsList = SideContactsData.map((contact) => {
    const IconComponent = ReactIcons[contact.icon];

    return (
      <div
        key={contact.href}
        className="flex items-center justify-start pt-2 mb-2 gap-x-2"
      >
        <div
          className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-lg shadow-md dark:bg-black hover:bg-light-gradient hover:text-white dark:hover:bg-dark-gradient group"
          style={
            theme === "dark"
              ? { color: contact.darkColor }
              : { color: contact.lightColor }
          }
        >
          <IconComponent alt={contact.fieldset} />
        </div>
        <div>
          <p className="text-xs font-semibold text-tiny text-slate-500 dark:text-gray-400">
            {contact.fieldset}
          </p>
          {contact.href ? (
            <Link
              href={contact.href}
              target="_blank"
              className="text-sm font-semibold text-slate-900 dark:text-gray-100 group-hover:text-white"
            >
              {contact.value}
            </Link>
          ) : (
            <p
              className="text-sm font-semibold text-slate-900 dark:text-gray-100 group-hover:text-white"
            >
              {contact.value}
            </p>
          )}
        </div>
      </div>
    );
  });

  return (
    <ul className="flex flex-col justify-center px-4 py-4 duration-300 divide-y rounded-lg divide-gray-300/60 bg-gray-50/70 dark:bg-gray-900/80 ">
      {contactsList}
    </ul>
  );
}
