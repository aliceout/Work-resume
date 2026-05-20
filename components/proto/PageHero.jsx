import HeroBand from "./HeroBand";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function PageHero({ section, namespace, ledeOverride }) {
  const { t } = useStaticTranslation("pages");
  return (
    <HeroBand
      section={section}
      label={t(`${namespace}.hero.label`)}
      title={t(`${namespace}.hero.title`)}
      em={t(`${namespace}.hero.em`)}
      lede={ledeOverride ?? t(`${namespace}.hero.lede`)}
    />
  );
}
