import { currentUser } from '@clerk/nextjs';
import { db } from '@/db';
import { questions, tagAllocations, tags } from '@/db/schema';

type requetType = {
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    time: number;
    topicTags: string[];
    notes?: string;
};
// TODO: add error handling for each db call
export async function POST(req: Request) {
    // TODO: add validation here with zod
    const { title, difficulty, time, notes, topicTags }: requetType =
        await req.json();
    const user = await currentUser();
    if (!user) return;

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

    return new Response('', { status: 200 });
}
