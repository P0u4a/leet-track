export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Questions = {
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
