import type { Difficulty } from '@/types/questions';

export function colorDifficulty(difficulty: Difficulty) {
    if (difficulty === 'Easy') return 'text-green-600';
    else if (difficulty === 'Medium') return 'text-amber-600';
    else return 'text-red-600';
}
