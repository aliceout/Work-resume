import { colorForSection } from "./Icon";

export default function PageContainer({ section, children }) {
  const c = section ? colorForSection(section) : null;
  const style = c
    ? { "--page-c": c.deep, "--page-c-soft": c.soft }
    : undefined;
  return <div style={style}>{children}</div>;
}
