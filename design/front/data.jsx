// Resume data — derived from the original CV
const DATA = {
  name: "Alice Aussel Delamaide",
  role: "Coordinatrice de la solidarité internationale",
  location: "Antananarivo, Madagascar",
  initials: "AA",
  status: "Disponible · ouverte aux opportunités",
  about: {
    lede: "Après plusieurs années entre ONG en France et missions à l'international, j'ai construit un parcours ancré dans les enjeux de migration, de justice sociale et d'engagement militant.",
    paragraphs: [
      "En France, j'ai été très investie dans le milieu associatif sur les questions d'exil (maraudes, accueil, accompagnement, plaidoyer), et j'ai fait des politiques migratoires le terrain principal de mes recherches à l'université.",
      "À l'international, j'ai occupé des postes à responsabilités en Afrique Centrale, au Maghreb, à Madagascar et en Ukraine, sur des programmes mêlant santé, exil, logistique humanitaire et coordination de projet.",
      "Engagée depuis longtemps sur les questions de genre, mon expérience personnelle et mon parcours queer nourrissent ma pratique professionnelle.",
    ],
    facets: [
      { title: "Coordination terrain", body: "Pilotage de programmes humanitaires multi-bases, en contextes d'urgence et de post-conflit.", icon: "compass" },
      { title: "Logistique humanitaire", body: "Stratégie d'approvisionnement, parcs véhicules, gestion d'équipes locales et internationales.", icon: "package" },
      { title: "Plaidoyer & politiques migratoires", body: "Rédaction de notes, mobilisation associative, recherche universitaire sur l'exil.", icon: "voice" },
      { title: "Genre & inclusion", body: "Articulation entre migration, genre et droits humains, en pratique et en théorie.", icon: "heart" },
    ],
    stats: [
      { n: "10+", l: "Années dans le secteur" },
      { n: "6", l: "Pays de mission" },
      { n: "4", l: "Langues" },
      { n: "15+", l: "Programmes pilotés" },
    ],
  },
  experiences: [
    {
      org: "Humanité & Inclusion", role: "Responsable des Opérations",
      date: "2025 — en cours", loc: "Antananarivo, Madagascar", current: true,
      themes: ["t2"],
      desc: "Projet d'appui logistique humanitaire axé sur l'accès, l'analyse et le renforcement des capacités dans un environnement multi-risques.",
      bullets: [
        "Coordination et pilotage d'un projet de préparation aux urgences",
        "Planification opérationnelle, suivi budgétaire, analyse de performance",
        "Conception, développement et rédaction de nouveaux projets",
        "Gestion des partenariats institutionnels et coordination inter-ONG",
      ],
    },
    {
      org: "Humanité & Inclusion", role: "Responsable logistique pays",
      date: "2025 · 6 mois", loc: "Kyiv, Ukraine",
      themes: ["t2"],
      desc: "Réponse à l'invasion russe — missions de protection, d'inclusion, de réhabilitation et de réduction de la violence armée.",
      bullets: [
        "Gestion de l'équipe logistique dans la capitale et sur 3 sites (62 personnes, 8 en direct)",
        "Formation et accompagnement sur les nationalisations de postes",
        "Définition des stratégies et planification des activités logistiques",
        "Supervision des flux d'approvisionnements et opérations de dédouanement",
      ],
    },
    {
      org: "Action Contre la Faim France", role: "Responsable de département logistique",
      date: "2024 — 2025 · 10 mois", loc: "Kyiv, Ukraine",
      themes: ["t2"],
      desc: "Réponse multisectorielle de soutien aux populations et services publics affectés par le conflit issu de l'invasion de 2022.",
      bullets: [
        "Encadrement de l'équipe logistique en capitale, et appui de 4 (puis 2) bases en province",
        "Gestion et animation d'équipes (environ 15 personnes)",
        "Supervision de processus RH (recrutements, évaluations, formations)",
        "Définition des stratégies et planification des activités logistiques",
      ],
    },
    {
      org: "Médecins du Monde France", role: "Coordinatrice Logistique nationale",
      date: "2021 — 2022 · 9 mois", loc: "Bangui, RCA",
      themes: ["t2"],
      desc: "Réponses d'urgence aux besoins de santé des populations affectées par le conflit sur le territoire centrafricain.",
      bullets: [
        "Encadrement de l'équipe logistique en capitale, et appui de deux bases en province",
        "Gestion et animation d'équipes (environ 25 personnes)",
        "Appui technique à un projet de Clinique mobile en contexte d'urgence",
        "Supervision des réhabilitations et constructions des centres de santé",
      ],
    },
    {
      org: "Médecins du Monde France", role: "Responsable logistique régionale",
      date: "2020 — 2021 · 9 mois", loc: "Kalemie, RD Congo",
      themes: ["t2"],
      desc: "Réponses d'urgence aux besoins de santé sur le territoire centrafricain.",
      bullets: [
        "Encadrement et animation d'une équipe d'une douzaine de personnes",
        "Suivi et gestion des parcs automobiles, communications et parc informatique",
        "Ouverture d'une sous-base dans le cadre d'une réponse d'urgence",
        "Animation des processus de recrutement, d'évaluations et de définitions des besoins RH",
      ],
    },
    {
      org: "Médecins du Monde France", role: "Logisticienne projet",
      date: "2020 · 3 mois", loc: "Marseille, France",
      themes: ["t1", "t2"],
      desc: "Réponses d'urgence en contexte Covid-19, au sein des squats et bidonvilles.",
      bullets: [
        "Gestion et suivi des stocks, gestion des EPI Covid-19",
        "Préparation distributions et interventions",
        "Création et mise à niveau des protocoles (sorties, stocks, achats)",
      ],
    },
    {
      org: "Humanité & Inclusion", role: "Chargée d'appui juridique aux études et diagnostics",
      date: "2019 · 6 mois", loc: "Tunis, Tunisie",
      themes: ["t1"],
      desc: "Appui de la direction régionale, dans la réalisation d'une mission exploratoire sur la situation des personnes migrantes dans le sud tunisien.",
      bullets: [
        "Étude sur les violences sexuelles et besoins en santé sexuelle et reproductive",
        "Étude sur les conditions de séjour, d'accueil et d'accès aux services de droit commun",
      ],
    },
    {
      org: "Caritas au Maroc", role: "Chargée d'appui à la coordination de programme",
      date: "2018 — 2019 · 8 mois", loc: "Rabat, Maroc",
      themes: ["t1"],
      desc: "Programme Migration",
      bullets: [
        "Participation à des actions d'appui au renforcement des capacités des partenaires",
        "Appui au suivi de projets (cadres logiques, budgets, fiches de postes, rapports)",
        "Refonte d'un outil de recueil de données : définition des besoins, élaboration du cahier des charges",
        "Conception d'un plan de communication et accompagnement à la 'numérisation' de certains process",
      ],
    },
  ],
  formations: [
    { title: "Master · Études de genre", date: "juil. 2025 — En cours", school: "Université d'Angers",
      themes: ["t3"],
      desc: "Analyse critique et intersectionnelle des rapports de genre, des discriminations et des politiques d'inclusion (LGBTQIA+, féminisme, minorités)." },
    { title: "Bac+2 · Développeuse Web et Web mobile", date: "2023", school: "École O'Clock",
      themes: ["t4"],
      desc: "Frontend : HTML5, CSS3, Sass, JavaScript, TypeScript, React · Backend : Node.js, Express, PostgreSQL · Spécialisation React/Redux." },
    { title: "Master II · Politiques publiques · Action humanitaire internationale", date: "2018 — 2019", school: "Université Paris-Est Créteil",
      themes: ["t1", "t2"],
      desc: "Option : Urgence et réhabilitation · Mention AB · Mémoires sur les TIC dans la solidarité et sur la notion de crise dans la thématique migratoire." },
    { title: "Master I · Relations Internationales", date: "2017 — 2018", school: "Université Lyon III · Jean Moulin",
      themes: ["t1"],
      desc: "Mémoire : L'externalisation des contrôles migratoires au Sahel. Étude sur un nouvel outil d'une politique européenne extra-territorialisée." },
    { title: "Licence · Droit public", date: "2015 — 2017", school: "Université Toulouse I · Capitole",
      themes: ["t1"],
      desc: "Mention AB · Dominante en droit administratif, droit international et droit européen." },
    { title: "Capacité en droit", date: "2013 — 2015", school: "Ipst · Cnam",
      themes: ["t1"],
      desc: "Diplôme délivré par l'Université Toulouse I Capitole · Mention B" },
  ],
  benevolat: [
    { org: "Watizat", date: "2022 — 2024", loc: "Toulouse, France",
      themes: ["t1", "t4"],
      desc: "Guide d'informations multilingue à destination des personnes exilées.",
      bullets: [
        "Aide à la rédaction et la mise à jour du guide listant les services aux personnes exilées",
        "Cheffe de projet et développeuse d'une application web complète de collecte et consultation des données",
      ] },
    { org: "Médecins du Monde", date: "2019 — 2024", loc: "Marseille, Toulouse, France",
      themes: ["t1", "t2"],
      desc: "Programmes 'Migrations frontières transalpines' (Marseille) & 'Actions mobiles' (Toulouse).",
      bullets: [
        "Support RH (profils de mission, organigramme, base de données), Logistique, Finances et informatique",
        "Participation à un COPIL de redéfinition des missions au sein d'un programme",
      ] },
    { org: "La Cimade", date: "2015 — 2023", loc: "Toulouse, Lyon, France",
      themes: ["t1"],
      desc: "Association d'assistance et d'information juridique auprès des personnes exilées.",
      bullets: [
        "Participation à des permanences d'accès aux droits",
        "Plaidoyer auprès de parlementaires dans le cadre de la loi « asile et immigration »",
        "Élaboration et mise en page des rapports d'activités régionaux et du festival Migrant'scène",
        "Accompagnement à la refonte et réorganisation du pôle SI, sensibilisation, plaidoyer",
      ] },
  ],
  competences: {
    certs: [
      { name: "Conception et pilotage d'un projet humanitaire", org: "Institut Bioforce", year: "2021" },
      { name: "Recherche de fonds et gestion de contrat de financement avec les bailleurs", org: "Institut Bioforce", year: "2021" },
      { name: "Négociation & médiation humanitaire", org: "IEHI · Université Aix-Marseille", year: "2020" },
      { name: "Initiation en langue et cultures arabe", org: "Université Lyon III Jean Moulin", year: "2020" },
      { name: "Certificat informatique PIX", org: "Université Lyon III Jean Moulin · Score 675", year: "2020" },
    ],
    langues: [
      { name: "Français", level: "C2 · Langue maternelle", pct: 100 },
      { name: "Anglais", level: "B2 · TOEIC 810/990", pct: 65 },
      { name: "Arabe moderne", level: "A1 · Utilisatrice débutante", pct: 22 },
    ],
    softs: [
      "Coordination d'équipe", "Gestion de projet", "Plaidoyer", "Analyse stratégique",
      "Logistique humanitaire", "Suivi budgétaire", "Communication interculturelle",
      "Médiation", "Recherche universitaire", "Web (React, Node)", "SI & outils collaboratifs",
    ],
  },
  portfolio: [
    { title: "Watizat", org: "Association Watizat", year: "2023", kind: "Application web",
      themes: ["t1", "t4"],
      desc: "Numérisation des guides d'information de l'association. Consultation, filtrage par catégorie, géolocalisation sur carte, back-office. Responsive desktop / mobile / tablette.", color: "#b7d4f0" },
    { title: "Migrappi", org: "ONG Caritas Maroc", year: "2019", kind: "Application métier",
      themes: ["t1", "t4"],
      desc: "Reconstruction d'une application de collecte et de traitement des données des personnes exilées accueillies. Modélisation de l'interface et construction du front avant passage de relais.", color: "#e3dcd2" },
    { title: "My resume", org: "Projet personnel", year: "2023", kind: "Site personnel",
      themes: ["t4"],
      desc: "Reconstruction de mon CV en ligne, comme alternative à LinkedIn, et portfolio des différents projets.", color: "#d5e9e7" },
    { title: "Currencies converter", org: "Projet personnel", year: "2023", kind: "Web app",
      themes: ["t4"],
      desc: "Application de conversion et d'affichage de l'historique des cours de change. Responsive desktop / mobile / tablette.", color: "#dce7f2" },
    { title: "Todolist", org: "Projet personnel", year: "2023 — en cours", kind: "Web app",
      themes: ["t4"],
      desc: "Application de gestion de liste de tâches, simple et responsive sur mobile et tablette.", color: "#1d2b4a", dark: true },
  ],
  contacts: [
    { kind: "signal", label: "Signal", value: "Envoyer un message" },
    { kind: "teams", label: "Teams", value: "Appeler via Teams" },
    { kind: "mail", label: "Email", value: "Envoyer un email" },
    { kind: "map", label: "Localisation", value: "Antananarivo (Madagascar)" },
  ],
};
window.DATA = DATA;

// Section colors — 6 sections, 6 accents distincts (palette de 8)
const SECTION_COLORS = [
  { id: "accueil",     c: "var(--azur)",   cd: "var(--azur-d)" },
  { id: "experiences", c: "var(--terre)",  cd: "var(--terre-d)" },
  { id: "formations",  c: "var(--indigo)", cd: "var(--indigo-d)" },
  { id: "benevolat",   c: "var(--prune)",  cd: "var(--prune-d)" },
  { id: "portfolio",   c: "var(--lagune)", cd: "var(--lagune-d)" },
  { id: "competences", c: "var(--ocre)",   cd: "var(--ocre-d)" },
];
window.SECTION_COLORS = SECTION_COLORS;
window.colorFor = (id) => SECTION_COLORS.find(s => s.id === id) || SECTION_COLORS[0];

// Themes meta — chacun avec sa couleur distincte
const THEMES_META = {
  t1: { id: "t1", num: "01", name: "Migration, droits & exil",       sub: "politiques publiques, accueil, plaidoyer",   c: "var(--corail-d)", soft: "var(--corail)" },
  t2: { id: "t2", num: "02", name: "Coordination & logistique humanitaire", sub: "programmes, équipes, supply, partenariats", c: "var(--mousse-d)", soft: "var(--mousse)" },
  t3: { id: "t3", num: "03", name: "Genre & intersectionnalité",     sub: "féminisme, queer, recherche universitaire",  c: "var(--prune-d)",  soft: "var(--prune)" },
  t4: { id: "t4", num: "04", name: "Développement informatique",      sub: "React, Node, outils internes & SI",          c: "var(--lagune-d)", soft: "var(--lagune)" },
};
window.THEMES_META = THEMES_META;
window.THEMES_LIST = ["t1", "t2", "t3", "t4"];
window.colorFor = (id) => SECTION_COLORS.find(s => s.id === id) || SECTION_COLORS[0];
