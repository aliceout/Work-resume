// Pages — each section as a stack of bandes.

const HeroBand = ({ section, label, title, em, lede }) => {
  const c = section ? window.colorFor(section) : null;
  const style = c ? { "--page-c": c.cd, "--page-c-soft": c.c } : undefined;
  return (
    <section className="band hero" style={style}>
      <div className="band-inner">
        <div className="pill">{label}</div>
        <h1>{title} <em>{em}</em></h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
};

const parseYear = (date) => {
  const m = date.match(/(\d{4})/);
  return m ? m[1] : "";
};
const parseRest = (date) => {
  const y = parseYear(date);
  return date.replace(y, "").trim().replace(/^[-–·\s]+/, "");
};

/* ============ ACCUEIL ============ */
const PageAccueil = ({ goToTheme }) => (
  <article className="page page-accueil" data-screen-label="01 Accueil">
    <HeroBand
      section="accueil"
      label="Accueil"
      title="En deux"
      em="mots."
      lede="Coordinatrice de la solidarité internationale, ancrée dans les enjeux de migration, de justice sociale et d'engagement militant — entre la France, l'Afrique et l'Europe de l'Est."
    />

    <section className="band about-compact">
      <div className="band-inner">
        <h3 className="band-h">À propos</h3>
        <p>Après plusieurs années entre ONG en France et missions à l'international, j'ai construit un parcours ancré dans les enjeux de migration, de justice sociale et d'engagement militant — milieu associatif sur les questions d'exil en France, postes à responsabilités en Afrique Centrale, Maghreb, Madagascar et Ukraine. Engagée depuis longtemps sur les questions de genre, mon parcours queer nourrit ma pratique professionnelle.</p>
      </div>
    </section>

    <section className="band themes-cards">
      <div className="band-inner">
        <h2 className="band-h">Mes terrains · thématiques <span className="hint">— cliquez pour explorer</span></h2>
        <div className="cards-grid">
          {window.THEMES_LIST.map(tid => {
            const t = window.THEMES_META[tid];
            return (
              <button
                key={tid}
                className="card"
                style={{ "--c": t.c, "--c-soft": t.soft }}
                onClick={() => goToTheme(tid)}
              >
                <div className="card-head">
                  <span className="dot"></span>
                  <span className="card-num">{t.num}</span>
                  <span className="card-nm">{t.name}</span>
                  <span className="card-arr">→</span>
                </div>
                <div className="card-sub">{t.sub}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>

    <section className="band now">
      <div className="band-inner">
        <div className="now-left">
          <div className="eb">En ce moment</div>
          <h2>Responsable des Opérations</h2>
          <div className="org">Humanité &amp; Inclusion</div>
          <div className="meta">◉ Antananarivo, Madagascar · depuis 2025</div>
        </div>
        <div className="now-right">
          <em>« Préparation aux urgences, partenariats institutionnels, coordination inter-ONG. »</em>
        </div>
      </div>
    </section>
  </article>
);

/* ============ TIMELINE entries (used by exp / form / benev) ============ */
const ThemeTags = ({ themes }) => {
  if (!themes || themes.length === 0) return null;
  return (
    <div className="entry-themes">
      {themes.map(tid => {
        const t = window.THEMES_META[tid];
        if (!t) return null;
        return (
          <span className="theme-tag" key={tid} style={{ "--c": t.c, "--c-soft": t.soft }}>
            <span className="dot"></span>{t.name}
          </span>
        );
      })}
    </div>
  );
};

const TLEntry = ({ date, current, title, org, loc, desc, bullets, side, themes }) => (
  <section className="band tl-entry">
    <div className="band-inner">
      <div className="entry">
        <div className="date">
          <div className="yr">{parseYear(date)}</div>
          <div>{parseRest(date)}</div>
          {current && <span className="now-tag">en cours</span>}
        </div>
        <div className="body">
          <h3>{title}</h3>
          <div className="org-line">
            {org && <span className="org">{org}</span>}
            {loc && <span className="loc">◉ {loc}</span>}
          </div>
          <ThemeTags themes={themes} />
          {desc && <p className="desc">{desc}</p>}
          {bullets && bullets.length > 0 && (
            <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          )}
        </div>
        <div className="tag-right">{side}</div>
      </div>
    </div>
  </section>
);

/* ============ EXPÉRIENCES ============ */
const PageExperiences = () => (
  <article className="page" data-screen-label="02 Expériences">
    <HeroBand
      section="experiences"
      label="Expériences"
      title="Parcours"
      em="terrain."
      lede="De la France à l'Ukraine, en passant par l'Afrique Centrale, le Maghreb et Madagascar — coordination, logistique et plaidoyer."
    />
    {DATA.experiences.map((e, i) => (
      <TLEntry
        key={i}
        date={e.date}
        current={e.current}
        title={e.role}
        org={e.org}
        loc={e.loc}
        desc={e.desc}
        bullets={e.bullets}
        themes={e.themes}
        side={e.loc.split(",")[0]}
      />
    ))}
  </article>
);

/* ============ FORMATIONS ============ */
const PageFormations = () => (
  <article className="page" data-screen-label="03 Formations">
    <HeroBand
      section="formations"
      label="Formations"
      title="Études &"
      em="diplômes."
      lede="Du droit public aux politiques migratoires, du développement web aux études de genre — un parcours pluridisciplinaire."
    />
    {DATA.formations.map((f, i) => (
      <TLEntry
        key={i}
        date={f.date}
        title={f.title}
        org={f.school}
        desc={f.desc}
        themes={f.themes}
      />
    ))}
  </article>
);

/* ============ BÉNÉVOLAT ============ */
const PageBenevolat = () => (
  <article className="page" data-screen-label="04 Bénévolat">
    <HeroBand
      section="benevolat"
      label="Bénévolat"
      title="Engagements &"
      em="militance."
      lede="Dix ans d'engagement associatif autour de l'exil, du droit et du plaidoyer — en parallèle des missions professionnelles."
    />
    {DATA.benevolat.map((b, i) => (
      <TLEntry
        key={i}
        date={b.date}
        title={b.org}
        loc={b.loc}
        desc={b.desc}
        bullets={b.bullets}
        themes={b.themes}
      />
    ))}
  </article>
);

/* ============ PORTFOLIO ============ */
const ProjThumb = ({ p, i }) => {
  const palettes = [
    { c: "var(--slate-d)" },
    { c: "var(--terra-d)" },
    { c: "var(--steel-d)" },
    { c: "var(--plum-d)" },
    { c: "var(--slate-d)" },
  ];
  const pal = palettes[i % palettes.length];
  return (
    <div className="thumb">
      <span className="tag">{p.kind}</span>
      <span className="yr">{p.year.replace(/[^0-9]/g, "").slice(0, 4)}</span>
      <svg viewBox="0 0 200 100" fill="none" stroke={pal.c} strokeWidth="1.2" opacity="0.7">
        <rect x="12" y="10" width="176" height="80" rx="6"/>
        <line x1="24" y1="28" x2="100" y2="28"/>
        <line x1="24" y1="42" x2="140" y2="42"/>
        <line x1="24" y1="56" x2="80" y2="56"/>
        <rect x="24" y="70" width="44" height="10" rx="2"/>
      </svg>
    </div>
  );
};

const PagePortfolio = () => (
  <article className="page" data-screen-label="05 Portfolio">
    <HeroBand
      section="portfolio"
      label="Projets"
      title="Derniers"
      em="projets."
      lede="Applications, outils internes, projets perso, bénévolat web et graphisme — un croisement entre solidarité, données et design."
    />
    <section className="band portfolio">
      <div className="band-inner">
        <div className="proj-grid">
          {DATA.portfolio.map((p, i) => (
            <div className="proj" key={i}>
              <ProjThumb p={p} i={i}/>
              <div className="body">
                <h4>{p.title}</h4>
                <div className="org">{p.org} · {p.year}</div>
                <ThemeTags themes={p.themes} />
                <p>{p.desc}</p>
                <a className="gh" href="#" onClick={e => e.preventDefault()}>
                  <Icon name="github" size={11}/> GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </article>
);

/* ============ COMPÉTENCES ============ */
const PageCompetences = () => {
  const certColors = ["var(--azur-d)", "var(--terre-d)", "var(--mousse-d)", "var(--indigo-d)", "var(--corail-d)", "var(--lagune-d)", "var(--ocre-d)", "var(--prune-d)"];
  return (
    <article className="page" data-screen-label="06 Compétences">
      <HeroBand
        section="competences"
        label="Compétences"
        title="Savoir-faire &"
        em="certifications."
        lede="Un mix d'expertise opérationnelle (humanitaire, juridique) et de savoir-faire technique (web, SI, outils collaboratifs)."
      />

      <section className="band certs tint">
        <div className="band-inner">
          <h2 className="band-h">Certifications</h2>
          <div className="cert-grid">
            {DATA.competences.certs.map((c, i) => (
              <div className="cert" key={i}>
                <div className="yr-circle" style={{ "--c": certColors[i % certColors.length] }}>
                  {c.year}
                </div>
                <div>
                  <h4>{c.name}</h4>
                  <div className="meta">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band langs">
        <div className="band-inner">
          <h2 className="band-h">Niveau linguistique</h2>
          <div className="lang-list">
            {DATA.competences.langues.map((l, i) => (
              <div className="lang" key={i}>
                <div className="top">
                  <div className="nm">
                    {l.name === "Français" && <>Fran<em>çais</em></>}
                    {l.name === "Anglais" && <>Angl<em>ais</em></>}
                    {l.name === "Arabe moderne" && <>Arabe <em>moderne</em></>}
                  </div>
                  <div className="lvl">{l.level}</div>
                </div>
                <div className="bar"><div className="fill" style={{ width: l.pct + "%" }}/></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band about tint-2">
        <div className="band-inner">
          <h2 className="band-h">Savoir-faire</h2>
          <div className="chips">
            {DATA.competences.softs.map((s, i) => {
              const cols = ["var(--azur-d)", "var(--terre-d)", "var(--mousse-d)", "var(--indigo-d)", "var(--corail-d)", "var(--lagune-d)", "var(--ocre-d)", "var(--prune-d)"];
              return (
                <span className="chip" key={i} style={{ "--dc": cols[i % cols.length] }}>
                  <span className="dot"></span>{s}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

const PAGES = {
  accueil: PageAccueil,
  experiences: PageExperiences,
  formations: PageFormations,
  benevolat: PageBenevolat,
  portfolio: PagePortfolio,
  competences: PageCompetences,
};

/* ============ THEMES (filtered view) ============ */
const PageThemes = ({ themeId, goToTheme, backToAccueil }) => {
  const t = window.THEMES_META[themeId] || window.THEMES_META.t1;
  const filterByTheme = (items) => (items || []).filter(it => (it.themes || []).includes(themeId));

  const exps   = filterByTheme(DATA.experiences);
  const forms  = filterByTheme(DATA.formations);
  const benev  = filterByTheme(DATA.benevolat);
  const projs  = filterByTheme(DATA.portfolio);

  return (
    <article className="page page-theme" data-screen-label={`Thème · ${t.name}`}>
      <section className="band theme-hero" style={{ "--c": t.c, "--c-soft": t.soft }}>
        <div className="band-inner">
          <button className="back" onClick={backToAccueil}>← Retour à l'accueil</button>
          <div className="pill"><span className="dot"></span>Thème {t.num}</div>
          <h1>{t.name}.</h1>
          <p className="sub">{t.sub}</p>

          <div className="theme-tabs">
            {window.THEMES_LIST.filter(id => id !== themeId).map(id => {
              const o = window.THEMES_META[id];
              return (
                <button
                  key={id}
                  className="tab-btn"
                  onClick={() => goToTheme(id)}
                  style={{ "--c": o.c }}
                >
                  <span className="dot"></span>
                  <span className="nm">{o.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {exps.length > 0 && (
        <>
          <h2 className="theme-section-h">Expériences <span className="ct">{exps.length}</span></h2>
          {exps.map((e, i) => (
            <TLEntry
              key={"e" + i}
              date={e.date}
              current={e.current}
              title={e.role}
              org={e.org}
              loc={e.loc}
              desc={e.desc}
              bullets={e.bullets}
              side={e.loc.split(",")[0]}
            />
          ))}
        </>
      )}

      {forms.length > 0 && (
        <>
          <h2 className="theme-section-h">Formations <span className="ct">{forms.length}</span></h2>
          {forms.map((f, i) => (
            <TLEntry
              key={"f" + i}
              date={f.date}
              title={f.title}
              org={f.school}
              desc={f.desc}
            />
          ))}
        </>
      )}

      {benev.length > 0 && (
        <>
          <h2 className="theme-section-h">Bénévolat <span className="ct">{benev.length}</span></h2>
          {benev.map((b, i) => (
            <TLEntry
              key={"b" + i}
              date={b.date}
              title={b.org}
              loc={b.loc}
              desc={b.desc}
              bullets={b.bullets}
            />
          ))}
        </>
      )}

      {projs.length > 0 && (
        <section className="band portfolio">
          <div className="band-inner">
            <h2 className="band-h">Projets — {projs.length}</h2>
            <div className="proj-grid">
              {projs.map((p, i) => (
                <div className="proj" key={"p" + i}>
                  <ProjThumb p={p} i={i}/>
                  <div className="body">
                    <h4>{p.title}</h4>
                    <div className="org">{p.org} · {p.year}</div>
                    <p>{p.desc}</p>
                    <a className="gh" href="#" onClick={ev => ev.preventDefault()}>
                      <Icon name="github" size={11}/> GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {exps.length + forms.length + benev.length + projs.length === 0 && (
        <section className="band">
          <div className="band-inner">
            <p style={{ color: "var(--ink-3)", fontSize: 14 }}>Aucun contenu lié à ce thème pour l'instant.</p>
          </div>
        </section>
      )}
    </article>
  );
};
window.PageThemes = PageThemes;
window.PAGES = PAGES;
