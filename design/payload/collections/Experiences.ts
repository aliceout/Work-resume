import type { CollectionConfig } from 'payload';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  access: { read: () => true },
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'organization', 'location', 'startDate', 'current'],
  },
  defaultSort: '-startDate',
  fields: [
    { name: 'organization', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'startDate', type: 'date', admin: { width: '33%' } },
        { name: 'endDate',   type: 'date', admin: { width: '33%' } },
        { name: 'current',   type: 'checkbox', defaultValue: false, admin: { width: '34%' } },
      ],
    },
    { name: 'dateLabel', type: 'text', admin: { description: 'Affichage libre (ex: "2025 — en cours", "2024 · 10 mois")' } },
    { name: 'location',  type: 'text', admin: { description: 'Ville, Pays' } },
    {
      name: 'themes',
      type: 'relationship',
      relationTo: 'themes',
      hasMany: true,
      admin: { description: '1 ou plusieurs thèmes transversaux' },
    },
    { name: 'description', type: 'textarea' },
    {
      name: 'bullets',
      type: 'array',
      labels: { singular: 'Tâche / responsabilité', plural: 'Tâches / responsabilités' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
};
