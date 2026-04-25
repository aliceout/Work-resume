import Head from "next/head";
import { siteConfig } from "/utils/seo/site";

export default function PersonSchema({ jobTitle, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle,
    description,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.ogImage}`,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
