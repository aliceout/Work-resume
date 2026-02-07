export function formatBullets(bullets) {
  if (Array.isArray(bullets)) {
    return {
      kind: "list",
      items: bullets
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean),
    };
  }

  if (bullets && typeof bullets === "object" && Array.isArray(bullets.items)) {
    return {
      kind: "list",
      items: bullets.items
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean),
    };
  }

  if (typeof bullets === "string" && bullets.trim().length > 0) {
    return { kind: "markdown", value: bullets };
  }

  return null;
}
