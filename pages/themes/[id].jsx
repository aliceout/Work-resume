import Link from "next/link";
import PageSeo from "/components/seo/PageSeo";
import Band from "/components/proto/Band";
import TLEntry from "/components/proto/TLEntry";
import ProjCard from "/components/proto/ProjCard";
import { getSectionContent } from "/utils/content";
import { useStaticTranslation } from "/utils/translations/useTranslations";

const SUPPORTED_LOCALES = ["fr", "en"];

const buildThemesMeta = (themesItems) =>
  (themesItems || []).reduce((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

const adaptProject = (project) => ({
  title: project.title,
  org: project.client,
  year: project.date,
  kind: project.languages,
  desc: project.description,
  repo: project.repository,
  themes: project.themes,
});

export default function ThemePage({
  theme,
  themesMeta,
  experiences,
  studies,
  volunteering,
  projects,
}) {
  const { t } = useStaticTranslation("pages");

  if (!theme) {
    return null;
  }

  const allThemes = Object.values(themesMeta);
  const nowLabel = t("works.nowLabel");

  return (
    <>
      <PageSeo
        title={`${theme.name} — ${t("themes.seo.title")}`}
        description={theme.sub}
        path={`/themes/${theme.id}`}
      />

      <Band
        className="proto-hero proto-theme-hero"
        style={{ "--page-c": theme.colorDeep, "--page-c-soft": theme.colorSoft }}
      >
        <div className="proto-hero-pill">{t("themes.themeLabel")}</div>
        <h1>
          {theme.name}
          <em>.</em>
        </h1>
        <p className="proto-lede">{theme.sub}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {allThemes.map((o) => {
            const isCurrent = o.id === theme.id;
            return (
              <Link
                key={o.id}
                href={`/themes/${o.id}`}
                data-active={isCurrent}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface-card text-[12px] text-ink-2 hover:border-ink transition-colors data-[active=true]:border-[var(--c)] data-[active=true]:text-[var(--c)]"
                style={{ "--c": o.colorDeep }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--c)" }}
                />
                {o.name}
              </Link>
            );
          })}
        </div>
      </Band>

      {experiences.length > 0 && (
        <>
          <Band className="proto-section-header">
            <h2 className="proto-band-h">
              {t("themes.experiencesSection")}{" "}
              <span className="proto-hint">{experiences.length}</span>
            </h2>
          </Band>
          {experiences.map((job, i) => (
            <TLEntry
              key={`e-${i}`}
              date={job.date}
              current={job.current}
              title={job.title}
              org={job.company}
              desc={job.description}
              bullets={job.bullets}
              themes={job.themes}
              themesMeta={themesMeta}
              side={job.location}
              nowLabel={nowLabel}
            />
          ))}
        </>
      )}

      {studies.length > 0 && (
        <>
          <Band className="proto-section-header">
            <h2 className="proto-band-h">
              {t("themes.studiesSection")}{" "}
              <span className="proto-hint">{studies.length}</span>
            </h2>
          </Band>
          {studies.map((s, i) => {
            const bullets = (s.description || [])
              .map((d) => d?.text)
              .filter((x) => typeof x === "string" && x.trim().length > 0);
            return (
              <TLEntry
                key={`s-${i}`}
                date={s.date}
                title={s.title}
                org={s.location}
                bullets={bullets}
                themes={s.themes}
                themesMeta={themesMeta}
              />
            );
          })}
        </>
      )}

      {volunteering.length > 0 && (
        <>
          <Band className="proto-section-header">
            <h2 className="proto-band-h">
              {t("themes.volunteeringSection")}{" "}
              <span className="proto-hint">{volunteering.length}</span>
            </h2>
          </Band>
          {volunteering.map((v, i) => (
            <TLEntry
              key={`v-${i}`}
              date={v.date}
              title={v.company}
              desc={v.description}
              bullets={v.bullets}
              themes={v.themes}
              themesMeta={themesMeta}
              side={v.location}
            />
          ))}
        </>
      )}

      {projects.length > 0 && (
        <Band tint={2}>
          <h2 className="proto-band-h">
            {t("themes.portfolioSection")}{" "}
            <span className="proto-hint">{projects.length}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <ProjCard
                key={p.title}
                project={adaptProject(p)}
                index={i}
                themesMeta={themesMeta}
              />
            ))}
          </div>
        </Band>
      )}

      {experiences.length +
        studies.length +
        volunteering.length +
        projects.length ===
        0 && (
        <Band>
          <p className="text-sm text-ink-3">{t("themes.empty")}</p>
        </Band>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const themesContent = await getSectionContent("themes", "fr");
  const ids = (themesContent?.items || []).map((t) => t.id);
  const paths = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const id of ids) {
      paths.push({ params: { id }, locale });
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const [themesContent, jobsContent, studiesContent, volunteeringContent, portfolioContent] =
    await Promise.all([
      getSectionContent("themes", locale),
      getSectionContent("jobs", locale),
      getSectionContent("studies", locale),
      getSectionContent("volunteering", locale),
      getSectionContent("portfolio", locale),
    ]);

  const themesMeta = buildThemesMeta(themesContent?.items);
  const theme = themesMeta[params.id] || null;

  const matches = (item) =>
    Array.isArray(item.themes) && item.themes.includes(params.id);

  return {
    props: {
      theme,
      themesMeta,
      experiences: (jobsContent?.items || []).filter(matches),
      studies: (studiesContent?.items || []).filter(matches),
      volunteering: (volunteeringContent?.items || []).filter(matches),
      projects: (portfolioContent?.projects || []).filter(matches),
    },
  };
}
