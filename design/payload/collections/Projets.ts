import type { CollectionConfig } from 'payload';

// Projets (anciennement "Portfolio") — perso + pro + bénévole, web + graphisme.
export const Projets: CollectionConfig = {
  slug: 'projets',
  access: { read: () => true },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'organization', 'year', 'kind'] },
  defaultSort: '-year',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'organization', type: 'text' },
    { name: 'year', type: 'text', admin: { description: 'Année ou plage (ex: 2023, 2023 — en cours)' } },
    {
      name: 'kind',
      type: 'select',
      defaultValue: 'web',
      options: [
        { label: 'Application web',  value: 'web' },
        { label: 'Web mobile',       value: 'mobile' },
        { label: 'Outil interne',    value: 'tool' },
        { label: 'Mise en page',     value: 'layout' },
        { label: 'Graphisme',        value: 'design' },
        { label: 'Site personnel',   value: 'site' },
        { label: 'Autre',            value: 'other' },
      ],
    },
    {
      name: 'context',
      type: 'select',
      defaultValue: 'pro',
      options: [
        { label: 'Personnel',  value: 'perso' },
        { label: 'Professionnel', value: 'pro' },
        { label: 'Bénévole',   value: 'benevole' },
      ],
    },
    {
      name: 'themes',
      type: 'relationship',
      relationTo: 'themes',
      hasMany: true,
    },
    { name: 'description', type: 'textarea' },
    {
      type: 'row',
      fields: [
        { name: 'image',  type: 'upload', relationTo: 'media', admin: { width: '60%' } },
        { name: 'thumbColor', type: 'text', defaultValue: '#d6dfeb', admin: { width: '25%', description: 'Hex de la vignette' } },
        { name: 'thumbDark',  type: 'checkbox', defaultValue: false, admin: { width: '15%', description: 'Texte clair' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'repoUrl', type: 'text', admin: { width: '50%', description: 'GitHub / GitLab' } },
        { name: 'liveUrl', type: 'text', admin: { width: '50%', description: 'Démo en ligne' } },
      ],
    },
  ],
};
