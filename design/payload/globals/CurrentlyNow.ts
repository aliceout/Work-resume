import type { GlobalConfig } from 'payload';

// Bloc "En ce moment" — poste actuel ou dernier poste mis en avant sur l'accueil.
export const CurrentlyNow: GlobalConfig = {
  slug: 'currentlyNow',
  label: 'En ce moment',
  access: { read: () => true },
  fields: [
    { name: 'role', type: 'text', required: true },
    { name: 'organization', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'location', type: 'text', admin: { width: '60%' } },
        { name: 'since',    type: 'text', admin: { width: '40%', description: 'ex: "depuis 2025"' } },
      ],
    },
    { name: 'quote', type: 'textarea', admin: { description: 'Citation courte affichée à droite' } },
    {
      name: 'linkedExperience',
      type: 'relationship',
      relationTo: 'experiences',
      admin: { description: 'Optionnel — lier à une expérience existante' },
    },
  ],
};
