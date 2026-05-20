import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiProtonmail, SiSignal } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import Icon, { NAV_ITEMS, colorForSection } from "./Icon";
import { useStaticTranslation } from "/utils/translations/useTranslations";

const sectionFromPath = (path) => {
  if (!path || path === "/") return "accueil";
  if (path.startsWith("/jobs")) return "experiences";
  if (path.startsWith("/studies")) return "formations";
  if (path.startsWith("/volunteering")) return "benevolat";
  if (path.startsWith("/portfolio")) return "portfolio";
  return "accueil";
};

export default function Sidebar() {
  const { t } = useStaticTranslation(["sidebar", "navbar"]);
  const router = useRouter();
  const current = sectionFromPath(router.pathname);

  return (
    <aside className="flex flex-col w-full lg:w-[268px] lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:pt-7 lg:pb-3.5 lg:px-[22px] gap-y-[18px] backdrop-blur-md border-r border-line bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] z-10">
      {/* Identity — column layout */}
      <div className="flex flex-col gap-[14px] px-1 py-0.5">
        <Image
          src="/images/profil-picture/color.jpg"
          alt="Alice Aussel Delamaide"
          width={84}
          height={84}
          className="rounded-full object-cover w-[84px] h-[84px] shrink-0 ring-1 ring-line shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
        />
        <div className="flex flex-col">
          <div className="font-tight font-medium text-[18px] leading-[1.1] tracking-[-0.02em] text-ink">
            Alice
            <br />
            Aussel Delamaide
          </div>
          <div className="font-serif italic text-[13px] leading-[1.35] text-ink-3 mt-1.5">
            {t("fonction")}
          </div>
        </div>
      </div>

      {/* Localisation */}
      <div className="flex items-center gap-2 px-3 text-ink-2 text-[12px] font-medium">
        <Icon name="pin" size={13} />
        {t("status")}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-px">
        <div className="text-[10px] tracking-[0.12em] uppercase text-ink-3 pt-1 pb-0 px-3">
          {t("sectionsLabel")}
        </div>
        {NAV_ITEMS.map((it, i) => {
          const isActive = current === it.id;
          const c = colorForSection(it.id);
          return (
            <Link
              key={it.id}
              href={it.href}
              data-active={isActive}
              className="group flex items-center gap-3 px-3 py-1.5 rounded-[10px] text-[13.5px] font-medium text-ink-2 hover:bg-surface-tint hover:text-ink data-[active=true]:bg-surface-tint data-[active=true]:text-ink transition-colors"
              style={{ "--c": c.deep }}
            >
              <span className="proto-nav-dot" data-active={isActive} />
              <span className="flex-1">{t(it.labelKey, it.labelKey)}</span>
              <span className="font-mono text-[10px] text-ink-4">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer — contacts + CV */}
      <div className="mt-auto flex flex-col gap-2 pt-[14px]">
        <div className="flex gap-1">
          {[
            { service: "linkedin", Icon: FaLinkedinIn, title: "LinkedIn" },
            { service: "mail", Icon: SiProtonmail, title: t("contacts.email") },
            { service: "signal", Icon: SiSignal, title: t("contacts.signal") },
            { service: "teams", Icon: BsMicrosoftTeams, title: t("contacts.teams") },
          ].map(({ service, Icon: SvcIcon, title }) => (
            <a
              key={service}
              href="#"
              title={title}
              data-service={service}
              onClick={(e) => e.preventDefault()}
              className="proto-contact-btn flex-1 h-8 rounded-[9px] border border-line grid place-items-center transition-colors"
            >
              <SvcIcon size={16} />
            </a>
          ))}
        </div>

        <a
          href="https://cloud.alyss.cc/s/pbHLqQa3gnK2Lrp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-[14px] py-[11px] rounded-[11px] bg-ink text-surface-card text-[13px] font-medium hover:-translate-y-px transition-transform"
        >
          <span>{t("downloadBtn")}</span>
          <span className="w-[18px] h-[18px] rounded-full bg-surface-card text-ink grid place-items-center">
            <Icon name="download" size={11} />
          </span>
        </a>
      </div>
    </aside>
  );
}
