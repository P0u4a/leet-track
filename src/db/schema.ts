import {
    mysqlTable,
    index,
    primaryKey,
    varchar,
    mysqlEnum,
    int,
} from 'drizzle-orm/mysql-core';

export const questions = mysqlTable(
    'questions',
    {
        id: varchar('id', { length: 64 }).notNull(),
        name: varchar('name', { length: 64 }).notNull(),
        difficulty: mysqlEnum('difficulty', [
            'Easy',
            'Medium',
            'Hard',
        ]).notNull(),
        timeElapsed: int('time_elapsed').notNull(),
        notes: varchar('notes', { length: 255 }),
        userId: varchar('user_id', { length: 64 }).notNull(),
    },
    (table) => {
        return {
            userIdIdx: index('user_id_idx').on(table.userId),
            questionsId: primaryKey(table.id),
        };
    }
);

export const tagAllocations = mysqlTable(
    'tag_allocations',
    {
        questionId: varchar('question_id', { length: 64 }).notNull(),
        tagName: varchar('tag_name', { length: 64 }).notNull(),
    },
    (table) => {
        return {
            questionIdIdx: index('question_id_idx').on(table.questionId),
            tagNameIdx: index('tag_name_idx').on(table.tagName),
            tagAllocationsQuestionIdTagName: primaryKey(
                table.questionId,
                table.tagName
            ),
        };
    }
);

export const tags = mysqlTable(
    'tags',
    {
        name: varchar('name', { length: 64 }).notNull(),
    },
    (table) => {
        return {
            tagsName: primaryKey(table.name),
        };
    }
);

export const users = mysqlTable(
    'users',
    {
        id: varchar('id', { length: 64 }).notNull(),
    },
    (table) => {
        return {
            usersId: primaryKey(table.id),
        };
    }
);
