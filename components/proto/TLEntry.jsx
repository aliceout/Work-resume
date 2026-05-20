import Band from "./Band";
import Icon from "./Icon";
import ThemeTags from "./ThemeTags";

const renderInline = (text) => {
  if (!text) return null;
  const parts = [];
  const re = /\*\*([^*]+)\*\*|\n/g;
  let lastIndex = 0;
  let match;
  let i = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[0] === "\n") {
      parts.push(<br key={`br-${i++}`} />);
    } else {
      parts.push(<strong key={`b-${i++}`}>{match[1]}</strong>);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
};

const parseDate = (date) => {
  if (!date) return { yr: "", rest: "" };
  const yearsMatch = date.match(/(\d{4})(?:\s*[-–]\s*(\d{4}))?/);
  if (!yearsMatch) return { yr: "", rest: date.trim() };

  const yr = yearsMatch[2]
    ? `${yearsMatch[1]} - ${yearsMatch[2]}`
    : yearsMatch[1];

  const rest = date
    .replace(yearsMatch[0], "")
    .trim()
    .replace(/^[-–·\s]+/, "")
    .replace(/[-–·\s]+$/, "")
    .replace(/\s+[-–·]\s+/g, " · ")
    .trim();

  return { yr, rest };
};

export default function TLEntry({
  date,
  current,
  title,
  org,
  loc,
  desc,
  bullets,
  side,
  themes,
  themesMeta,
  nowLabel = "en cours",
}) {
  const { yr, rest } = parseDate(date);
  return (
    <Band>
      <div className="proto-entry">
        <div className="proto-date">
          <div className="proto-yr">{yr}</div>
          {rest && <div>{rest}</div>}
        </div>
        <div className="proto-body">
          <h3>{title}</h3>
          {(org || loc) && (
            <div className="proto-org-line">
              {org && <span className="proto-org">{org}</span>}
              {loc && <span className="proto-loc">◉ {loc}</span>}
            </div>
          )}
          {desc && <p className="proto-desc">{renderInline(desc)}</p>}
          {bullets && bullets.length > 0 && (
            <ul>
              {bullets.map((b, i) => (
                <li key={i}>{renderInline(b)}</li>
              ))}
            </ul>
          )}
          <ThemeTags themes={themes} themesMeta={themesMeta} />
        </div>
        {side && (
          <div className="proto-tag-right">
            <Icon name="pin" size={11} />
            <span>{side}</span>
          </div>
        )}
      </div>
    </Band>
  );
}
