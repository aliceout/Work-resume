// Façade côté front — convertit la réponse Payload vers la forme
// attendue par cv-bandes/data.jsx (DATA + THEMES_META).
//
// Exemple d'usage :
//   import { fetchCV } from './payloadAdapter';
//   const { DATA, THEMES_META, THEMES_LIST } = await fetchCV(import.meta.env.VITE_API);
//   window.DATA = DATA; window.THEMES_META = THEMES_META; ...

export async function fetchCV(apiBase) {
  const j = async (url) => (await fetch(apiBase + url)).json();
  const [profile, about, now, compet, contactsRes, themesRes, expsRes, formsRes, bensRes, projsRes, certsRes] = await Promise.all([
    j('/api/globals/profile?depth=1'),
    j('/api/globals/about'),
    j('/api/globals/currentlyNow?depth=1'),
    j('/api/globals/competences'),
    j('/api/globals/contacts'),
    j('/api/themes?limit=100&sort=num'),
    j('/api/experiences?limit=100&depth=1&sort=-startDate'),
    j('/api/formations?limit=100&depth=1&sort=-startDate'),
    j('/api/benevolat?limit=100&depth=1&sort=-startDate'),
    j('/api/projets?limit=100&depth=1&sort=-year'),
    j('/api/certifications?limit=100&sort=-year'),
  ]);

  const themesList = (themesRes.docs || []);
  const THEMES_META = Object.fromEntries(
    themesList.map(t => [t.slug, {
      id: t.slug,
      num: t.num,
      name: t.name,
      sub: t.sub,
      c:    t.palette?.deep || 'var(--azur-d)',
      soft: t.palette?.soft || 'var(--azur)',
    }])
  );
  const THEMES_LIST = themesList.map(t => t.slug);

  const themesOf = (rels) => (rels || []).map(r => (typeof r === 'object' ? r.slug : null)).filter(Boolean);
  const bulletsOf = (arr) => (arr || []).map(b => b.text);

  const DATA = {
    name: `${profile.firstName} ${profile.lastName}`,
    role: profile.role,
    location: profile.location,
    initials: profile.initials,
    status: profile.status,
    photo: profile.photo,

    about: {
      lede: about.lede,
      paragraphs: (about.paragraphs || []).map(p => p.text),
      stats: (about.stats || []).map(s => ({ n: s.value, l: s.label })),
    },

    currentlyNow: {
      role: now.role,
      org: now.organization,
      loc: now.location,
      since: now.since,
      quote: now.quote,
    },

    experiences: (expsRes.docs || []).map(e => ({
      org: e.organization, role: e.role,
      date: e.dateLabel, loc: e.location, current: !!e.current,
      themes: themesOf(e.themes),
      desc: e.description, bullets: bulletsOf(e.bullets),
    })),

    formations: (formsRes.docs || []).map(f => ({
      title: f.title, date: f.dateLabel, school: f.school,
      themes: themesOf(f.themes),
      desc: f.description,
    })),

    benevolat: (bensRes.docs || []).map(b => ({
      org: b.organization, date: b.dateLabel, loc: b.location,
      themes: themesOf(b.themes),
      desc: b.description, bullets: bulletsOf(b.bullets),
    })),

    portfolio: (projsRes.docs || []).map(p => ({
      title: p.title, org: p.organization, year: p.year, kind: p.kind,
      context: p.context, themes: themesOf(p.themes),
      desc: p.description,
      color: p.thumbColor, dark: !!p.thumbDark,
      image: p.image, repoUrl: p.repoUrl, liveUrl: p.liveUrl,
    })),

    competences: {
      certs: (certsRes.docs || []).map(c => ({
        name: c.name, org: c.organization, year: c.year,
      })),
      langues: (compet.langues || []).map(l => ({
        name: l.name, level: l.level, pct: l.pct,
      })),
      softs: (compet.softs || []).map(s => s.label),
    },

    contacts: (contactsRes.items || []).map(c => ({
      kind: c.kind, label: c.label, value: c.value,
    })),
  };

  return { DATA, THEMES_META, THEMES_LIST };
}
