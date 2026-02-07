import Link from "next/link";
import { useTheme } from "next-themes";
import { useIcons } from "/utils/context/IconsContext";
import { useStaticTranslation } from "/utils/translations/useTranslations";
import contactsData from "../../public/shared/contacts.json";

export default function SideContact() {
  const ReactIcons = useIcons();
  const { theme } = useTheme();
  const { t } = useStaticTranslation("sidebar");
  const contacts = contactsData.items || [];

  const contactsList = contacts.map((contact) => {
    const IconComponent = ReactIcons[contact.icon];

    const content = (
      <div className="flex items-center justify-start w-full gap-x-2">
        <div
          className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-lg shadow-md dark:bg-black group-hover:text-white"
          style={{
            color: contact.lightColor,
            backgroundColor: theme === "dark" ? "black" : "white",
          }}
        >
          <IconComponent alt={contact.fieldset} aria-label={contact.fieldset} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-tiny text-slate-500 dark:text-gray-400">
            {contact.fieldset}
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-gray-100">
            {contact.href ? t(contact.valueTransKey) : contact.value}
          </p>
        </div>
      </div>
    );

    if (contact.href) {
      return (
        <li key={contact.fieldset} className="pt-2 mb-2">
          <Link
            href={contact.href}
            target="_blank"
            className="flex items-center gap-x-2 group"
          >
            {content}
          </Link>
        </li>
      );
    }

    return (
      <li
        key={contact.fieldset}
        className="flex items-center justify-start pt-2 mb-2 gap-x-2"
      >
        {content}
      </li>
    );
  });

  return (
    <ul className="grid justify-center w-full grid-cols-2 px-2 py-4 mx-auto duration-300 divide-y-0 rounded-lg lg:justify-center lg:px-4 gap-x-3 lg-divide-y md:grid-cols-2 lg:flex lg:flex-col divide-gray-300/60 bg-gray-50/70 dark:bg-gray-900/80">
      {contactsList}
    </ul>
  );
}
