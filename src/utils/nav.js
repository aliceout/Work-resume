export const SUPPORTED_LOCALES = ["fr", "en"];
export const DEFAULT_LOCALE = "fr";

const ROUTES = [
  { id: "accueil", path: "", labelKey: "accueil" },
  { id: "experiences", path: "jobs", labelKey: "experiences" },
  { id: "formations", path: "studies", labelKey: "formations" },
  { id: "benevolat", path: "volunteering", labelKey: "benevolat" },
  { id: "projets", path: "projects", labelKey: "projets" },
];

export const buildNavItems = (lang = DEFAULT_LOCALE) =>
  ROUTES.map((r) => ({
    id: r.id,
    labelKey: r.labelKey,
    href: r.path ? `/${lang}/${r.path}/` : `/${lang}/`,
  }));

export const SECTION_COLORS = {
  accueil: { soft: "var(--azur)", deep: "var(--azur-d)" },
  experiences: { soft: "var(--magenta)", deep: "var(--magenta-d)" },
  formations: { soft: "var(--indigo)", deep: "var(--indigo-d)" },
  benevolat: { soft: "var(--prune)", deep: "var(--prune-d)" },
  projets: { soft: "var(--soleil)", deep: "var(--soleil-d)" },
};

export const colorForSection = (id) =>
  SECTION_COLORS[id] || SECTION_COLORS.accueil;

export const localeFromPath = (path) => {
  if (!path) return DEFAULT_LOCALE;
  const m = path.match(/^\/([a-z]{2})(\/|$)/);
  if (m && SUPPORTED_LOCALES.includes(m[1])) return m[1];
  return DEFAULT_LOCALE;
};

export const sectionFromPath = (path) => {
  if (!path) return null;
  // Strip leading /xx/ (locale)
  const stripped = path.replace(/^\/[a-z]{2}/, "") || "/";
  if (stripped === "/" || stripped === "") return "accueil";
  if (stripped.startsWith("/jobs")) return "experiences";
  if (stripped.startsWith("/studies")) return "formations";
  if (stripped.startsWith("/volunteering")) return "benevolat";
  if (stripped.startsWith("/projects")) return "projets";
  // Other paths (e.g. /themes/...) → no main-nav section is active
  return null;
};

export const swapLocaleInPath = (path, nextLocale) => {
  if (!path) return `/${nextLocale}/`;
  const stripped = path.replace(/^\/[a-z]{2}/, "");
  return `/${nextLocale}${stripped || "/"}`;
};
