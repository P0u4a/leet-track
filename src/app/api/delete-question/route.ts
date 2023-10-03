import { db } from '@/db';
import { questions, tagAllocations } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
    const questionId = await req.json();

    // First delete question tag allocations
    try {
        await db
            .delete(tagAllocations)
            .where(eq(tagAllocations.questionId, questionId));
        // Delete the actual question
        await db.delete(questions).where(eq(questions.id, questionId));
    } catch (err) {
        return new Response('Internal Error', { status: 500 });
    }

    return new Response('Question deleted successfully', { status: 200 });
}
