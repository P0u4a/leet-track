import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

type requetType = {
    title: string;
    difficulty: string;
    time: number;
    topicTags: string[];
    notes: string;
};

export async function POST(req: Request) {
    // TODO: add validation here with zod
    const questionData: requetType = await req.json();
    const user = await currentUser();
    if (!user) return;

    return NextResponse.json({ data: 'nice' });
}
