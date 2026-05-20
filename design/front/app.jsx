// App — bandes layout + tweaks (accent / tint / density / align / theme)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "slate",
  "tint": "soft",
  "density": "normal",
  "align": "left",
  "theme": "light"
}/*EDITMODE-END*/;

// Accent palettes (deep + soft pair)
const ACCENTS = {
  slate: { d: "#4a6688", soft: "#d8e0ec" },
  terra: { d: "#b56544", soft: "#f0d8c8" },
  steel: { d: "#5a5e72", soft: "#dadce4" },
  plum:  { d: "#8a5a6c", soft: "#ead8de" },
  ink:   { d: "#16171a", soft: "#dadbe0" },
};

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [section, setSection] = React.useState("accueil");
  const [themeId, setThemeId] = React.useState(null);
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-tint", t.tint);
    document.documentElement.setAttribute("data-density", t.density);
    document.documentElement.setAttribute("data-align", t.align);
  }, [t.theme, t.tint, t.density, t.align]);

  React.useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS.slate;
    document.documentElement.style.setProperty("--accent", a.soft);
    document.documentElement.style.setProperty("--accent-d", a.d);
  }, [t.accent]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section, themeId]);

  const navTo = (s) => { setSection(s); setThemeId(null); };
  const goToTheme = (id) => { setSection("themes"); setThemeId(id); };
  const backToAccueil = () => { setSection("accueil"); setThemeId(null); };

  let pageContent;
  if (section === "themes" && themeId) {
    pageContent = <PageThemes themeId={themeId} goToTheme={goToTheme} backToAccueil={backToAccueil} />;
  } else {
    const Page = PAGES[section] || PAGES.accueil;
    pageContent = <Page goToTheme={goToTheme} />;
  }

  return (
    <>
      <div className="app">
        <Sidebar section={section} setSection={navTo} />
        <main className="content" ref={mainRef}>
          <React.Fragment key={section + (themeId || "")}>{pageContent}</React.Fragment>
        </main>
      </div>

      <div className="util">
        <button
          data-active={t.theme === "dark"}
          onClick={() => setTweak("theme", t.theme === "dark" ? "light" : "dark")}
          title={t.theme === "dark" ? "Mode clair" : "Mode sombre"}
        >
          <Icon name={t.theme === "dark" ? "sun" : "moon"} size={14}/>
        </button>
        <button className="lang" title="Langue">FR</button>
      </div>

      <TweaksPanel title="Tweaks · CV">
        <TweakSection label="Accent" />
        <TweakRadio
          label="Couleur"
          value={t.accent}
          onChange={v => setTweak("accent", v)}
          options={[
            { value: "slate", label: "Ardoise" },
            { value: "terra", label: "Terra" },
            { value: "steel", label: "Acier" },
            { value: "plum",  label: "Prune" },
          ]}
        />

        <TweakSection label="Bandes" />
        <TweakRadio
          label="Teinte"
          value={t.tint}
          onChange={v => setTweak("tint", v)}
          options={[
            { value: "none",   label: "Aucune" },
            { value: "soft",   label: "Douce" },
            { value: "strong", label: "Forte" },
          ]}
        />

        <TweakSection label="Densité" />
        <TweakRadio
          label="Espacement"
          value={t.density}
          onChange={v => setTweak("density", v)}
          options={[
            { value: "compact",  label: "Compact" },
            { value: "normal",   label: "Normal" },
            { value: "spacious", label: "Aéré" },
          ]}
        />

        <TweakSection label="Alignement" />
        <TweakRadio
          label="Contenu"
          value={t.align}
          onChange={v => setTweak("align", v)}
          options={[
            { value: "left",     label: "À gauche" },
            { value: "centered", label: "Centré" },
          ]}
        />

        <TweakSection label="Thème" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          onChange={v => setTweak("theme", v)}
          options={[
            { value: "light", label: "Clair" },
            { value: "dark",  label: "Sombre" },
          ]}
        />
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
