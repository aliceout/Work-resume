// Payload CMS v3 — main config
// Mirrors the shape of cv-bandes/data.jsx

import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Themes } from './collections/Themes';
import { Experiences } from './collections/Experiences';
import { Formations } from './collections/Formations';
import { Benevolat } from './collections/Benevolat';
import { Projets } from './collections/Projets';
import { Certifications } from './collections/Certifications';

import { Profile } from './globals/Profile';
import { About } from './globals/About';
import { CurrentlyNow } from './globals/CurrentlyNow';
import { Competences } from './globals/Competences';
import { Contacts } from './globals/Contacts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' · Alice CV Admin',
    },
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Themes,
    Experiences,
    Formations,
    Benevolat,
    Projets,
    Certifications,
  ],
  globals: [
    Profile,
    About,
    CurrentlyNow,
    Competences,
    Contacts,
  ],
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI },
  }),
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5173'].filter(Boolean),
});
