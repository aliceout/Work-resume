/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    localeDetection: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
