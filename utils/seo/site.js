export const siteConfig = {
  domain: "https://aliceosdel.work",
  name: "Alice Aussel Delamaide",
  defaultLocale: "fr",
  locales: ["fr", "en"],
  ogImage: "/images/profil-picture/color.jpg",
  twitterHandle: null,
  social: {
    linkedin: "https://linkedin.com/in/aliceOsdel",
  },
};

export const localizedUrl = (path, locale) => {
  const cleanPath = path === "/" ? "" : path;
  if (!locale || locale === siteConfig.defaultLocale) {
    return `${siteConfig.domain}${cleanPath || "/"}`;
  }
  return `${siteConfig.domain}/${locale}${cleanPath}`;
};
