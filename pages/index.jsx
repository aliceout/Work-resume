import Link from "next/link";
import PageSeo from "/components/seo/PageSeo";
import PersonSchema from "/components/seo/PersonSchema";
import Band from "/components/proto/Band";
import PageHero from "/components/proto/PageHero";
import ThemeCard from "/components/proto/ThemeCard";
import CarnetCard from "/components/proto/CarnetCard";
import { getSectionContent } from "/utils/content";
import { fetchLatestCarnetPost } from "/utils/carnet";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function Home({ homeContent, themes, currentJob, carnetPost }) {
  const { t, locale } = useStaticTranslation("pages");

  return (
    <>
      <PageSeo
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        path="/"
      />
      <PersonSchema
        jobTitle={t("home.seo.jobTitle")}
        description={t("home.seo.description")}
      />

      <PageHero
        section="accueil"
        namespace="home"
        ledeOverride={homeContent?.lede}
      />

      {homeContent?.about_summary && (
        <Band className="proto-about-compact">
          <h3 className="proto-band-h">{t("home.aboutLabel")}</h3>
          <p>{homeContent.about_summary}</p>
        </Band>
      )}

      {themes && themes.length > 0 && (
        <Band>
          <h2 className="proto-band-h">
            {t("home.themesLabel")}
            <span className="proto-hint">{t("home.themesHint")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {themes.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </Band>
      )}

      {currentJob && (
        <Band>
          <div className="proto-now">
            <Link
              href="/jobs"
              className="proto-info-card"
              style={{ "--c": "var(--magenta-d)" }}
            >
              <div className="proto-info-head">
                <span className="proto-dot" />
                <span className="proto-info-label">
                  {t("home.currentLabel")}
                </span>
                <span className="proto-card-arr">→</span>
              </div>
              <h3 className="proto-info-title">{currentJob.title}</h3>
              <div className="proto-info-org">{currentJob.company}</div>
              <div className="proto-info-meta">
                ◉ {currentJob.location} · {currentJob.date}
              </div>
            </Link>
            <CarnetCard post={carnetPost} locale={locale} />
          </div>
        </Band>
      )}
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [homeContent, themesData, jobsData, carnetPost] = await Promise.all([
    getSectionContent("home", locale),
    getSectionContent("themes", locale),
    getSectionContent("jobs", locale),
    fetchLatestCarnetPost(),
  ]);

  const themes = themesData?.items || [];
  const currentJob = (jobsData?.items || []).find((j) => j.current) || null;

  return {
    props: {
      homeContent,
      themes,
      currentJob,
      carnetPost,
    },
    revalidate: 3600,
  };
}
