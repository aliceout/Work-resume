const MOCK_POST = {
  title:
    "L'homonationalisme a-t-il une diplomatie ? Retour sur dix ans de discours sur les droits LGBTQI+ aux Nations unies",
  link: "https://carnet.aliceosdel.org/2026/04/homonationalisme-diplomatie",
  pubDate: "2026-04-14T00:00:00.000Z",
  description:
    "En 2011, le Conseil des droits de l'homme adoptait sa première résolution sur l'orientation sexuelle. Quinze ans plus tard, l'instrumentalisation de cet acquis dessine une ligne de fracture qui traverse aussi bien le « bloc occidental » que ses contestataires.",
};

const extractTag = (xml, tag) => {
  const re = new RegExp(
    `<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`,
  );
  const m = xml.match(re);
  return m ? m[1].trim() : null;
};

export const fetchLatestCarnetPost = async (rssUrl) => {
  if (!rssUrl) return MOCK_POST;
  try {
    const res = await fetch(rssUrl, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!res.ok) return MOCK_POST;
    const xml = await res.text();
    const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
    if (!itemMatch) return MOCK_POST;

    const item = itemMatch[1];
    const title = extractTag(item, "title");
    const link = extractTag(item, "link");
    const pubDate = extractTag(item, "pubDate");
    const description = extractTag(item, "description");

    if (!title || !link) return MOCK_POST;

    return {
      title,
      link,
      pubDate: pubDate ? new Date(pubDate).toISOString() : null,
      description: description
        ? description.replace(/<[^>]+>/g, "").trim().slice(0, 200)
        : "",
    };
  } catch {
    return MOCK_POST;
  }
};
