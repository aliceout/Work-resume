import type { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  fields: [
    { name: 'lede', type: 'textarea', admin: { description: 'Phrase d\'intro affichée sous le titre de la home' } },
    {
      name: 'paragraphs',
      type: 'array',
      labels: { singular: 'Paragraphe', plural: 'Paragraphes' },
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      name: 'stats',
      type: 'array',
      labels: { singular: 'Statistique', plural: 'Statistiques' },
      fields: [
        { type: 'row', fields: [
          { name: 'value', type: 'text', required: true, admin: { width: '30%', description: 'ex: "10+"' } },
          { name: 'label', type: 'text', required: true, admin: { width: '70%', description: 'ex: "Années dans le secteur"' } },
        ] },
      ],
    },
  ],
};
