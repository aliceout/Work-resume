import type { GlobalConfig } from 'payload';

// Contacts — boutons en bas de la sidebar (Signal, Teams, Mail, Localisation)
export const Contacts: GlobalConfig = {
  slug: 'contacts',
  access: { read: () => true },
  fields: [
    {
      name: 'items',
      type: 'array',
      labels: { singular: 'Contact', plural: 'Contacts' },
      fields: [
        { type: 'row', fields: [
          {
            name: 'kind',
            type: 'select',
            required: true,
            admin: { width: '30%' },
            options: [
              { label: 'Signal',    value: 'signal' },
              { label: 'Teams',     value: 'teams' },
              { label: 'Email',     value: 'mail' },
              { label: 'LinkedIn',  value: 'linkedin' },
              { label: 'Téléphone', value: 'phone' },
              { label: 'Localisation', value: 'map' },
            ],
          },
          { name: 'label', type: 'text', required: true, admin: { width: '30%' } },
          { name: 'value', type: 'text', required: true, admin: { width: '40%', description: 'Valeur affichée ou URL' } },
        ] },
      ],
    },
  ],
};
