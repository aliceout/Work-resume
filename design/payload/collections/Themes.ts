import type { CollectionConfig } from 'payload';

// Thèmes — 4 catégories transversales utilisées partout via relation.
// Le `slug` (t1/t2/t3/t4) sert d'identifiant stable côté front.
export const Themes: CollectionConfig = {
  slug: 'themes',
  access: { read: () => true },
  admin: { useAsTitle: 'name', defaultColumns: ['num', 'name', 'slug'] },
  defaultSort: 'num',
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Identifiant stable (t1, t2, t3, t4)' },
    },
    { name: 'num', type: 'text', required: true, admin: { description: '01, 02, …' } },
    { name: 'name', type: 'text', required: true },
    { name: 'sub', type: 'text', required: false, admin: { description: 'Sous-thèmes, séparés par des virgules' } },
    {
      name: 'palette',
      type: 'group',
      fields: [
        { name: 'soft', type: 'text', defaultValue: 'var(--corail)',   admin: { description: 'Variable CSS — fond pastel' } },
        { name: 'deep', type: 'text', defaultValue: 'var(--corail-d)', admin: { description: 'Variable CSS — encre/accent' } },
      ],
    },
  ],
};
