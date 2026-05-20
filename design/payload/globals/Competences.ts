import type { GlobalConfig } from 'payload';

export const Competences: GlobalConfig = {
  slug: 'competences',
  access: { read: () => true },
  fields: [
    {
      name: 'langues',
      type: 'array',
      labels: { singular: 'Langue', plural: 'Langues' },
      fields: [
        { type: 'row', fields: [
          { name: 'name',  type: 'text', required: true, admin: { width: '40%' } },
          { name: 'level', type: 'text', required: true, admin: { width: '40%', description: 'ex: "C2 · Langue maternelle"' } },
          { name: 'pct',   type: 'number', min: 0, max: 100, admin: { width: '20%', description: 'Barre %' } },
        ] },
      ],
    },
    {
      name: 'softs',
      type: 'array',
      labels: { singular: 'Compétence', plural: 'Savoir-faire' },
      fields: [{ name: 'label', type: 'text', required: true }],
    },
  ],
};
