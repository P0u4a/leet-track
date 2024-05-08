import type { NewEntry, AddEntry, LeetcodeRes } from '@/types/request';
export async function addEntry(entry: NewEntry) {
    const processTitle = (title: string) => {
        const regex = /https:\/\/leetcode\.com\/problems\/([^/]+)\//;

        const titleSlug = title.match(regex);
        // If input was the question url, return the title slug, else strip out the number from the title string if it exists
        return titleSlug ? titleSlug[1] : title.replace(/^\d+\.\s(.*)$/, '$1');
    };

    const rawTitle = processTitle(entry.title);
    const leetcodeRes = await fetch('/api/fetch-leetcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: rawTitle }),
    });

    if (leetcodeRes.status === 403) return 403;
    if (leetcodeRes.status !== 200) return 500;

    const { data }: LeetcodeRes = await leetcodeRes.json();

    if (data.question === null) return 400;

    const request: AddEntry = {
        title: data.question.title,
        time: entry.time,
        notes: entry.notes,
        difficulty: data.question.difficulty,
        topicTags: data.question.topicTags.map(
            (topic: { name: string }) => topic.name
        ),
    };

    const res = await fetch('/api/add-entry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (res.status !== 200) return 500;
    return 200;
}
