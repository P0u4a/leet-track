export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Question = {
    tags: {
        name: string;
    }[];
    id: number;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    timeElapsed: number;
    notes: string | null;
};

export type Questions = {
    tags: {
        name: string;
    }[];
    id: number;
    name: string;
    difficulty: Difficulty;
    timeElapsed: number;
    notes: string | null;
    dateCompleted: Date;
}[];
