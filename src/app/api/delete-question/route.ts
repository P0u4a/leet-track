import { db } from '@/db';
import { questions, tagAllocations } from '@/db/schema';
import { eq } from 'drizzle-orm';

// TODO: add error handling for each db call
export async function POST(req: Request) {
    const questionId = await req.json();

    // First delete question tag allocations
    await db
        .delete(tagAllocations)
        .where(eq(tagAllocations.questionId, questionId));
    // Delete the actual question
    await db.delete(questions).where(eq(questions.id, questionId));

    return new Response('', { status: 200 });
}
