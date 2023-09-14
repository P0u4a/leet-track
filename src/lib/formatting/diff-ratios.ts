type Difficulty = 'Easy' | 'Medium' | 'Hard';

type Questions = {
    tags: {
        name: string;
    }[];
    id: number;
    name: string;
    difficulty: Difficulty;
    timeElapsed: number;
    notes: string | null;
    dateCompleted: string;
}[];

export function difficultyRatios(data: Questions) {
    const n = data.length;
    const diffCounts = {
        easyCount: 0,
        mediumCount: 0,
        hardCount: 0,
    };

    for (const question of data) {
        if (question.difficulty === 'Easy') diffCounts.easyCount++;
        if (question.difficulty === 'Medium') diffCounts.mediumCount++;
        if (question.difficulty === 'Hard') diffCounts.hardCount++;
    }

    let res: number[] = [];

    for (const count in diffCounts) {
        res.push(
            parseFloat(
                (
                    (diffCounts[count as keyof typeof diffCounts] / n) *
                    100
                ).toFixed(2)
            )
        );
    }
    return res;
}
