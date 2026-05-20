import Link from "next/link";

export default function ThemeCard({ theme }) {
  if (!theme) return null;
  return (
    <Link
      href={`/themes/${theme.id}`}
      className="proto-theme-card"
      style={{ "--c": theme.colorDeep, "--c-soft": theme.colorSoft }}
    >
      <div className="proto-card-head">
        <span className="proto-dot" />
        <span className="proto-card-num">{theme.num}</span>
        <span className="proto-card-nm">{theme.name}</span>
        <span className="proto-card-arr">→</span>
      </div>
      <div className="proto-card-sub">{theme.sub}</div>
    </Link>
  );
}
