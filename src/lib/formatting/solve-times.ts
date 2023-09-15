import type { Questions } from '@/types/questions';

type Data = {
    easy: {
        x: string;
        y: number;
    }[];
    medium: {
        x: string;
        y: number;
    }[];
    hard: {
        x: string;
        y: number;
    }[];
};

export function solveTimes(data: Questions) {
    const res: Data = {
        easy: [],
        medium: [],
        hard: [],
    };

    for (const question of data) {
        if (question.difficulty === 'Easy')
            res.easy?.push({
                y: question.timeElapsed,
                x: question.dateCompleted,
            });
        else if (question.difficulty === 'Medium')
            res.medium?.push({
                y: question.timeElapsed,
                x: question.dateCompleted,
            });
        else
            res.hard?.push({
                y: question.timeElapsed,
                x: question.dateCompleted,
            });
    }

    return res;
}
