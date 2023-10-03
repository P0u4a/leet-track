import { questions, tagAllocations } from '@/db/schema';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

async function getQuestionTags(id: number) {
    try {
        const tags = await db
            .select({
                name: tagAllocations.tagName,
            })
            .from(tagAllocations)
            .where(eq(tagAllocations.questionId, id));

        return tags;
    } catch (err) {
        return [];
    }
}

export async function fetchQuestions() {
    const user = await currentUser();
    if (!user) return;
    try {
        const userQuestions = await db
            .select({
                id: questions.id,
                name: questions.name,
                difficulty: questions.difficulty,
                timeElapsed: questions.timeElapsed,
                notes: questions.notes,
                dateCompleted: questions.dateCompleted,
            })
            .from(questions)
            .where(eq(questions.userId, user.id));

        const questionTagsPromises = userQuestions.map(async (question) => ({
            ...question,
            tags: await getQuestionTags(question.id),
        }));

        const questionsWithTags = Promise.all(questionTagsPromises);

        return questionsWithTags;
    } catch (err) {
        return null;
    }
}
