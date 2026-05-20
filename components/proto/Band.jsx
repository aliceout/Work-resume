export default function Band({
  children,
  tint,
  className = "",
  innerClassName = "",
  style,
  as: Tag = "section",
}) {
  const tintClass =
    tint === 1 ? "bg-surface-tint" : tint === 2 ? "bg-surface-tint-2" : "";
  return (
    <Tag className={`proto-band ${tintClass} ${className}`} style={style}>
      <div className={`proto-band-inner ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
