import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { eq, inArray } from 'drizzle-orm';
import { db } from '@/db';
import { questions, tagAllocations, users } from '@/db/schema';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET!;

export async function POST(req: Request) {
    const headerPayload = headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new SVIX instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error verifying webhook', {
            status: 400,
        });
    }

    // Get user ID and type
    const { id } = evt.data;
    const eventType = evt.type;

    if (!id) return new Response('Internal Error', { status: 500 });

    if (eventType === 'user.created') {
        try {
            await db.insert(users).values({ id: id });
        } catch (err) {
            return new Response('Internal Error', { status: 500 });
        }
    } else if (eventType === 'user.deleted') {
        try {
            // get questionIds to be deleted
            const qids = await db
                .select({ questionId: questions.id })
                .from(questions)
                .where(eq(questions.userId, id));
            // Use questionIds to delete their tag allocations
            await db.delete(tagAllocations).where(
                inArray(
                    tagAllocations.questionId,
                    qids.map((qid) => qid.questionId)
                )
            );
            // Delete the rest
            await db.delete(questions).where(eq(questions.userId, id));
            await db.delete(users).where(eq(users.id, id));
        } catch (err) {
            return new Response('Internal Error', { status: 500 });
        }
    }

    return new Response(null, { status: 201 });
}
