import type { CollectionConfig } from 'payload';

export const Formations: CollectionConfig = {
  slug: 'formations',
  access: { read: () => true },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'school', 'startDate'] },
  defaultSort: '-startDate',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'school', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'startDate', type: 'date', admin: { width: '50%' } },
        { name: 'endDate',   type: 'date', admin: { width: '50%' } },
      ],
    },
    { name: 'dateLabel', type: 'text' },
    {
      name: 'themes',
      type: 'relationship',
      relationTo: 'themes',
      hasMany: true,
    },
    { name: 'description', type: 'textarea' },
  ],
};
