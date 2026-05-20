import type { CollectionConfig } from 'payload';

// File uploads — photo, project images, etc.
export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  fields: [
    { name: 'alt', type: 'text', required: false },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumb',  width: 240, height: 240, position: 'centre' },
      { name: 'medium', width: 720 },
      { name: 'large',  width: 1440 },
    ],
    adminThumbnail: 'thumb',
    mimeTypes: ['image/*'],
  },
};
