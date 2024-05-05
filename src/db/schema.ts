import { sql } from 'drizzle-orm';

import {
    sqliteTable,
    primaryKey,
    text,
    integer,
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
    (table) => {
        return {
            questionTagName: primaryKey(table.questionId, table.tagName),
        };
    }
);

export const tags = sqliteTable('tags', {
    name: text('name').primaryKey(),
});

export const users = sqliteTable('users', {
    id: text('id').primaryKey(),
});
