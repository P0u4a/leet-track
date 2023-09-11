import { questions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs';

export async function GET() {
    const user = await currentUser();
    if (!user) return;
    const userQuestions = await db
        .select({
            name: questions.name,
            difficulty: questions.difficulty,
            timeElapsed: questions.timeElapsed,
            notes: questions.notes,
        })
        .from(questions)
        .where(eq(questions.userId, user.id));

    return new Response(JSON.stringify(userQuestions), {
        status: 200,
    });
}
