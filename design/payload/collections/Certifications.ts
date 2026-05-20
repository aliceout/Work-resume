import type { CollectionConfig } from 'payload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  access: { read: () => true },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'organization', 'year'] },
  defaultSort: '-year',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'organization', type: 'text', required: true },
    { name: 'year', type: 'text', required: true },
    { name: 'detail', type: 'text', admin: { description: 'Détail optionnel (score PIX, mention, etc.)' } },
  ],
};
