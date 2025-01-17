import { sql } from 'drizzle-orm';
import type { AdapterAccountType } from 'next-auth/adapters';
import {
  sqliteTable,
  primaryKey,
  text,
  integer,
  index,
} from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';

export const questions = sqliteTable('questions', {
  id: text('id')
    .$defaultFn(() => nanoid())
    .primaryKey(),
  name: text('name').notNull(),
  difficulty: text('difficulty', {
    enum: ['Easy', 'Medium', 'Hard'],
  }).notNull(),
  timeElapsed: integer('time_elapsed').notNull(),
  notes: text('notes'),
  dateCompleted: integer('date_completed', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});

export const tagAllocations = sqliteTable(
  'tag_allocations',
  {
    questionId: text('question_id')
      .notNull()
      .references(() => questions.id),
    tagName: text('tag_name')
      .notNull()
      .references(() => tags.name),
  },
  (table) => [index('question_tag_name').on(table.questionId, table.tagName)]
);

export const tags = sqliteTable('tags', {
  name: text('name').primaryKey(),
});

export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
  image: text('image'),
});

export const sessions = sqliteTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
});

export const accounts = sqliteTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (table) => [index('provider_id').on(table.provider, table.providerAccountId)]
);
