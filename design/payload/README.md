# Payload CMS — Backend for Alice's CV

This is a Payload v3 setup that exposes the exact data shape consumed by the React front (`cv-bandes/data.jsx`).

## Quick start

```bash
npm install payload @payloadcms/db-postgres @payloadcms/richtext-lexical
# or @payloadcms/db-mongodb if you prefer Mongo

# .env
DATABASE_URI=postgres://...
PAYLOAD_SECRET=replace-me
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

npm run dev
```

Open `/admin` to log in. The schema is divided into **Collections** (lists of items) and **Globals** (one-off blocks).

## Collections

| Collection      | Shape | Front consumer |
|----------------|-------|----------------|
| `themes`        | `{ slug, num, name, sub, color, colorSoft }` | `THEMES_META` |
| `experiences`   | `{ org, role, dateLabel, location, current, themes[], description, bullets[] }` | `DATA.experiences` |
| `formations`    | `{ title, dateLabel, school, themes[], description }` | `DATA.formations` |
| `benevolat`     | `{ org, dateLabel, location, themes[], description, bullets[] }` | `DATA.benevolat` |
| `projets`       | `{ title, org, year, kind, themes[], description, color, dark, image, repoUrl }` | `DATA.portfolio` |
| `certifications`| `{ name, organization, year }` | `DATA.competences.certs` |
| `media`         | uploads | photo, thumbnails |

## Globals

| Global    | Shape | Front consumer |
|-----------|-------|----------------|
| `profile`     | `{ firstName, lastName, role, location, status, photo, initials }` | sidebar identity |
| `about`       | `{ lede, paragraphs[], stats[] }` | Accueil bio |
| `currentlyNow`| `{ role, organization, location, since, quote }` | "En ce moment" band |
| `competences` | `{ langues[], softs[] }` | Compétences page |
| `contacts`    | `{ items[] }` (signal / teams / mail / map) | sidebar contacts |

## Mapping to the front

The REST endpoints Payload exposes follow this convention:

```
GET /api/themes
GET /api/experiences?depth=2
GET /api/globals/profile
GET /api/globals/about
GET /api/globals/currentlyNow
GET /api/globals/competences
GET /api/globals/contacts
```

Theme references in items return the linked theme objects when `depth >= 1`. The front maps Payload's `id` to its `t1/t2/t3/t4` short codes via the `slug` field on each Theme document.

## Front consumption sketch

Replace the static `data.jsx` with a fetcher:

```js
async function loadCV(api) {
  const [profile, about, now, compet, contacts, themes, exps, forms, bens, projs, certs] = await Promise.all([
    fetch(api + '/api/globals/profile').then(r => r.json()),
    fetch(api + '/api/globals/about').then(r => r.json()),
    fetch(api + '/api/globals/currentlyNow').then(r => r.json()),
    fetch(api + '/api/globals/competences').then(r => r.json()),
    fetch(api + '/api/globals/contacts').then(r => r.json()),
    fetch(api + '/api/themes?limit=100').then(r => r.json()),
    fetch(api + '/api/experiences?depth=1&limit=100&sort=-startDate').then(r => r.json()),
    fetch(api + '/api/formations?depth=1&limit=100&sort=-startDate').then(r => r.json()),
    fetch(api + '/api/benevolat?depth=1&limit=100&sort=-startDate').then(r => r.json()),
    fetch(api + '/api/projets?depth=1&limit=100&sort=-year').then(r => r.json()),
    fetch(api + '/api/certifications?limit=100&sort=-year').then(r => r.json()),
  ]);
  // ... then map to the DATA / THEMES_META shape the front expects
}
```

See `payload.config.ts` for the wiring.
