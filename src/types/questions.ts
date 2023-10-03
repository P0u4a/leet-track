import { z } from 'zod';
const DifficultySchema = z.enum(['Easy', 'Medium', 'Hard']);
export type Difficulty = z.infer<typeof DifficultySchema>;

const QuestionSchema = z.object({
    tags: z.array(
        z.object({
            name: z.string(),
        })
    ),
    id: z.number(),
    name: z.string(),
    difficulty: DifficultySchema,
    timeElapsed: z.number(),
    notes: z.string().nullable(),
});

export type Question = z.infer<typeof QuestionSchema>;

export type Questions = Question[];
