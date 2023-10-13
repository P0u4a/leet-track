import { z } from 'zod';

export const NewEntrySchema = z.object({
    title: z.string(),
    time: z.number(),
    notes: z.string().optional(),
});

export type NewEntry = z.infer<typeof NewEntrySchema>;

export const AddEntrySchema = z.object({
    title: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    time: z.number(),
    topicTags: z.array(z.string()),
    notes: z.string().optional(),
});

export type AddEntry = z.infer<typeof AddEntrySchema>;

export type LeetcodeRes = {
    data: {
        question: {
            title: string;
            difficulty: 'Easy' | 'Medium' | 'Hard';
            topicTags: { name: string }[];
        };
    };
};
