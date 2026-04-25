import Head from "next/head";
import { useRouter } from "next/router";
import { siteConfig, localizedUrl } from "/utils/seo/site";

export default function PageSeo({ title, description, path, image }) {
  const router = useRouter();
  const locale = router.locale || siteConfig.defaultLocale;
  const canonical = localizedUrl(path, locale);
  const ogImageUrl = `${siteConfig.domain}${image || siteConfig.ogImage}`;
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {siteConfig.locales.map((alt) => (
        <link
          key={alt}
          rel="alternate"
          hrefLang={alt}
          href={localizedUrl(path, alt)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={localizedUrl(path, siteConfig.defaultLocale)}
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
