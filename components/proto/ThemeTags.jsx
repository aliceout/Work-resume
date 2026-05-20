export default function ThemeTags({ themes, themesMeta }) {
  if (!themes || themes.length === 0 || !themesMeta) return null;
  return (
    <div className="proto-theme-tags">
      {themes.map((id) => {
        const meta = themesMeta[id];
        if (!meta) return null;
        return (
          <span
            key={id}
            className="proto-theme-tag"
            style={{ "--c": meta.colorDeep, "--c-soft": meta.colorSoft }}
          >
            <span className="proto-dot" />
            {meta.name}
          </span>
        );
      })}
    </div>
  );
}
