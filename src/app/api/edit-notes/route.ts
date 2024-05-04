import { db } from '@/db';
import { questions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const EditNotesSchema = z.object({
    questionId: z.string(),
    newNote: z.string(),
});

export async function POST(req: Request) {
    const data = await req.json();
    const res = EditNotesSchema.safeParse(data);
    if (!res.success) return new Response('Invalid Request', { status: 400 });

    const { questionId, newNote } = res.data;

    try {
        await db
            .update(questions)
            .set({ notes: newNote })
            .where(eq(questions.id, questionId));
    } catch (err) {
        return new Response('Internal Error', { status: 500 });
    }

    return new Response('Note edited successfully', { status: 200 });
}
