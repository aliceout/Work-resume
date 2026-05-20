import type { GlobalConfig } from 'payload';

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: { read: () => true },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'firstName', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'lastName',  type: 'text', required: true, admin: { width: '50%' } },
      ],
    },
    { name: 'role', type: 'text', required: true, admin: { description: 'Coordinatrice de la solidarité internationale…' } },
    {
      type: 'row',
      fields: [
        { name: 'location', type: 'text', admin: { width: '50%' } },
        { name: 'status',   type: 'text', admin: { width: '50%', description: 'ex : "Disponible", "En mission"' } },
      ],
    },
    { name: 'initials', type: 'text', admin: { description: 'Fallback avatar (ex: AA)' } },
    { name: 'photo', type: 'upload', relationTo: 'media' },
  ],
};
