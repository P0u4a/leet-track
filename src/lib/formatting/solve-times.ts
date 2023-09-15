import type { Questions } from '@/types/questions';
import { format } from 'date-fns';

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
            res.easy.push({
                y: question.timeElapsed,
                x: format(question.dateCompleted, 'yyyy-MM-dd HH:mm:ss'),
            });
        else if (question.difficulty === 'Medium')
            res.medium.push({
                y: question.timeElapsed,
                x: format(question.dateCompleted, 'yyyy-MM-dd HH:mm:ss'),
            });
        else
            res.hard.push({
                y: question.timeElapsed,
                x: format(question.dateCompleted, 'yyyy-MM-dd HH:mm:ss'),
            });
    }

    return res;
}
