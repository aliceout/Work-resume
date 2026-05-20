import Icon from "./Icon";

const formatDate = (dateStr, locale = "fr") => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function CarnetCard({ post, locale }) {
  if (!post) return null;
  const dateLabel = formatDate(post.pubDate, locale);
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="proto-info-card proto-info-card-carnet"
      style={{ "--c": "var(--prune-d)" }}
    >
      <div className="proto-info-head">
        <span className="proto-dot" />
        <span className="proto-info-label">
          Carnet de recherche
          <span className="proto-info-label-sub">(dernier billet)</span>
        </span>
        <Icon name="external" size={11} />
      </div>
      <h3 className="proto-info-title">{post.title}</h3>
      {dateLabel && <div className="proto-info-meta">{dateLabel}</div>}
      <span className="proto-info-cta">Lire →</span>
    </a>
  );
}
