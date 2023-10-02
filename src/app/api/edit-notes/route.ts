import { db } from '@/db';
import { questions } from '@/db/schema';
import { eq } from 'drizzle-orm';

// TODO: add error handling for each db call
export async function POST(req: Request) {
    const { questionId, newNote } = await req.json();

    await db
        .update(questions)
        .set({ notes: newNote })
        .where(eq(questions.id, questionId));

    return new Response('', { status: 200 });
}
