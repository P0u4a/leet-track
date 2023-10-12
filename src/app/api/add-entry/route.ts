import { currentUser } from '@clerk/nextjs';
import { db } from '@/db';
import { questions, tagAllocations, tags } from '@/db/schema';
import { z } from 'zod';

const requestSchema = z.object({
    title: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    time: z.number(),
    topicTags: z.array(z.string()),
    notes: z.string().optional(),
});

export async function POST(req: Request) {
    const data = await req.json();
    const res = requestSchema.safeParse(data);

    if (!res.success) return new Response('Invalid request', { status: 400 });

    const { title, difficulty, time, notes, topicTags } = res.data;

    const user = await currentUser();
    // if (!user) return new Response('Unauthorised', { status: 401 });

    try {
        const { insertId } = await db.insert(questions).values({
            name: title,
            difficulty: difficulty,
            timeElapsed: time,
            notes: notes,
            userId: user.id,
        });

        for (const tag of topicTags)
            await db.insert(tags).ignore().values({ name: tag });

        const questionId = parseInt(insertId, 10);

        for (const tag of topicTags)
            await db
                .insert(tagAllocations)
                .ignore()
                .values({ tagName: tag, questionId: questionId });
    } catch (err) {
        return new Response('Internal Error', { status: 500 });
    }

    return new Response('Question added successfully', { status: 200 });
}
