import { auth } from '@clerk/nextjs';
import { db } from '@/db';
import { questions, tagAllocations, tags } from '@/db/schema';
import { AddEntrySchema } from '@/types/request';

export async function POST(req: Request) {
    const data = await req.json();
    const res = AddEntrySchema.safeParse(data);

    if (!res.success) return new Response('Invalid request', { status: 400 });

    const { title, difficulty, time, notes, topicTags } = res.data;

    const { userId }: { userId: string | null } = auth();
    if (!userId) return new Response('Unauthorised', { status: 401 });

    try {
        const [{ insertId }] = await db
            .insert(questions)
            .values({
                name: title,
                difficulty: difficulty,
                timeElapsed: time,
                notes: notes,
                userId: userId,
            })
            .returning({ insertId: questions.id });

        topicTags.forEach(async (tag) => {
            await db.insert(tags).values({ name: tag }).onConflictDoNothing();
            await db
                .insert(tagAllocations)
                .values({ tagName: tag, questionId: insertId })
                .onConflictDoNothing();
        });
    } catch (err) {
        return new Response('Internal Error', { status: 500 });
    }

    return new Response('Question added successfully', { status: 200 });
}
