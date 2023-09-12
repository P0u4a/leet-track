import { questions, tags, tagAllocations } from '@/db/schema';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

// TODO Add error checking for db queries
async function getQuestionTags(id: number) {
    const tags = await db
        .select({
            name: tagAllocations.tagName,
        })
        .from(tagAllocations)
        .where(eq(tagAllocations.questionId, id));

    return tags;
}

export async function fetchQuestions() {
    const user = await currentUser();
    if (!user) return;

    const userQuestions = await db
        .select({
            id: questions.id,
            name: questions.name,
            difficulty: questions.difficulty,
            timeElapsed: questions.timeElapsed,
            notes: questions.notes,
        })
        .from(questions)
        .where(eq(questions.userId, user.id));

    const questionTagsPromises = userQuestions.map(async (question) => ({
        ...question,
        tags: await getQuestionTags(question.id),
    }));

    const questionsWithTags = Promise.all(questionTagsPromises);

    return questionsWithTags;
}
