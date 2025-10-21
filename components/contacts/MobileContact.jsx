import Link from "next/link";
import { useIcons } from "/utils/context/IconsContext";
import { useStaticTranslation } from "/utils/translations/useTranslations";
import contactsData from "../../public/shared/contacts.json";

export default function MobileContact() {
  const ReactIcons = useIcons();
  const { t: tSidebar } = useStaticTranslation("sidebar");
  const { t: tMobileMenu } = useStaticTranslation("mobileMenu");
  const contacts = (contactsData.items || []).filter(
    (contact) => contact.mobile === true
  );

  const contactsList = contacts.map((contact) => {
    const IconComponent = ReactIcons[contact.icon];

    return (
      <div
        key={contact.fieldset}
        className="flex items-center justify-start pt-2 mb-2 gap-x-2 "
      >
        <div
          className="flex items-center justify-center w-10 h-10 duration-300 hover:text-white group"
          style={{
            color: contact.lightColor,
          }}
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
              {tSidebar(contact.valueTransKey)}
            </Link>
          ) : (
            <p className="text-sm font-semibold text-slate-900 dark:text-gray-100 group-hover:text-white">
              {contact.value}
            </p>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col px-4 duration-300 gap-y-2 max-w-max">
      <p className="px-3 font-semibold ">
        {tMobileMenu("contactMe")}
      </p>
      {contactsList}
    </div>
  );
}
