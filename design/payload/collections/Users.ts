import type { CollectionConfig } from 'payload';

// Admin users for /admin login
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'name', type: 'text' },
  ],
};
