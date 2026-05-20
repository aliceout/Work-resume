import Band from "./Band";
import { colorForSection } from "./Icon";

export default function HeroBand({ section, label, title, em, lede }) {
  const c = section ? colorForSection(section) : null;
  const style = c
    ? { "--page-c": c.deep, "--page-c-soft": c.soft }
    : undefined;

  return (
    <Band className="proto-hero" style={style}>
      {label && <div className="proto-hero-pill">{label}</div>}
      <h1>
        {title}
        {em && (
          <>
            {" "}
            <em>{em}</em>
          </>
        )}
      </h1>
      {lede && <p className="proto-lede">{lede}</p>}
    </Band>
  );
}
