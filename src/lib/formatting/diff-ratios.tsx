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
}[];

type DiffRatios = {
    difficulty: Difficulty;
    percentage: number;
}[];

export function difficultyRatios(data: Questions) {
    const n = data.length;
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;

    for (const question of data) {
        if (question.difficulty === 'Easy') easyCount++;
        if (question.difficulty === 'Medium') mediumCount++;
        if (question.difficulty === 'Hard') hardCount++;
    }

    const res: DiffRatios = [
        {
            difficulty: 'Easy',
            percentage: parseFloat(((easyCount / n) * 100).toFixed(2)),
        },
        {
            difficulty: 'Medium',
            percentage: parseFloat(((mediumCount / n) * 100).toFixed(2)),
        },
        {
            difficulty: 'Hard',
            percentage: parseFloat(((hardCount / n) * 100).toFixed(2)),
        },
    ];

    return res;
}
