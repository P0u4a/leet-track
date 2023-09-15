import type { Questions } from '@/types/questions';

type Data = {
    labels: string[];
    counts: number[];
};

export function topicCounts(data: Questions) {
    const res: Data = {
        labels: [],
        counts: [],
    };
    const topics = new Map<string, number>();

    for (const question of data) {
        for (const tag of question.tags) {
            if (topics.has(tag.name)) {
                let count = topics.get(tag.name)!;
                topics.set(tag.name, count + 1);
            } else {
                topics.set(tag.name, 1);
            }
        }
    }

    for (const [key, value] of topics) {
        res.labels.push(key);
        res.counts.push(value);
    }

    return res;
}
