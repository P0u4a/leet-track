export function colorDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard') {
    if (difficulty === 'Easy') return 'text-green-600';
    else if (difficulty === 'Medium') return 'text-amber-600';
    else return 'text-red-600';
}
