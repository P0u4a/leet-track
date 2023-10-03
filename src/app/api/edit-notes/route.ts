import { db } from '@/db';
import { questions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const EditNotesSchema = z.object({
    questionId: z.number(),
    newNote: z.string(),
});

// TODO: add error handling for each db call
export async function POST(req: Request) {
    const res = EditNotesSchema.safeParse(req.body);
    if (!res.success) return new Response('Invalid Request', { status: 400 });

    const { questionId, newNote } = res.data;

    await db
        .update(questions)
        .set({ notes: newNote })
        .where(eq(questions.id, questionId));

    return new Response('', { status: 200 });
}
