import { questions, tagAllocations } from '@/db/schema';
import { db } from '@/db';
import { auth } from '@/lib/auth';
import { eq, desc } from 'drizzle-orm';

async function getQuestionTags(id: string) {
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
  const session = await auth();

  if (!session?.user) return;

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
      .where(eq(questions.userId, session.user.id!))
      .orderBy(desc(questions.dateCompleted));

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
