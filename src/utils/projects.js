/**
 * Adapte un projet du contenu (projects.json) au shape attendu par ProjCard.astro.
 * Gère la rétrocompatibilité picture (string) → pictures (array).
 *
 * @param {any} project
 * @returns {{
 *   title: string,
 *   org: string,
 *   year: string,
 *   desc: string,
 *   repo: string | null,
 *   themes: string[] | undefined,
 *   pictures: string[],
 * }}
 */
export const adaptProject = (project) => ({
  title: project.title,
  org: project.client,
  year: project.date,
  desc: project.description,
  repo: project.repository,
  themes: project.themes,
  pictures: project.pictures || (project.picture ? [project.picture] : []),
});
