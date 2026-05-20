import type { CollectionConfig } from 'payload';

export const Benevolat: CollectionConfig = {
  slug: 'benevolat',
  access: { read: () => true },
  admin: { useAsTitle: 'organization', defaultColumns: ['organization', 'location', 'startDate'] },
  defaultSort: '-startDate',
  fields: [
    { name: 'organization', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'startDate', type: 'date', admin: { width: '50%' } },
        { name: 'endDate',   type: 'date', admin: { width: '50%' } },
      ],
    },
    { name: 'dateLabel', type: 'text' },
    { name: 'location', type: 'text' },
    {
      name: 'themes',
      type: 'relationship',
      relationTo: 'themes',
      hasMany: true,
    },
    { name: 'description', type: 'textarea' },
    {
      name: 'bullets',
      type: 'array',
      labels: { singular: 'Action', plural: 'Actions' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
};
