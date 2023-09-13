type Question = {
    tags: {
        name: string;
    }[];
    id: number;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    timeElapsed: number;
    notes: string | null;
};

export const mockQuestions: Question[] = [
    {
        id: 1,
        name: 'Fair Distribution of Cookies',
        difficulty: 'Medium',
        timeElapsed: 63000,
        notes: 'This works!!',
        tags: [
            { name: 'sorting' },
            { name: 'array' },
            { name: 'greedy' },
            { name: 'dynamic programming' },
            { name: 'bitmasking' },
        ],
    },
    {
        id: 2,
        name: 'Valid Sudoku',
        difficulty: 'Medium',
        timeElapsed: 539000,
        notes: '',
        tags: [
            { name: 'array' },
            { name: 'backtracking' },
            { name: 'recursion' },
        ],
    },
    {
        id: 3,
        name: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        timeElapsed: 965000,
        notes: 'Cool solution.',
        tags: [
            { name: 'binary tree' },
            { name: 'depth first search' },
            { name: 'breadth first search' },
            { name: 'sorting' },
        ],
    },
    {
        id: 4,
        name: 'Group Anagrams',
        difficulty: 'Medium',
        timeElapsed: 21000,
        notes: '',
        tags: [{ name: 'array' }, { name: 'string' }, { name: 'hashmap' }],
    },
    {
        id: 5,
        name: 'Two Sum',
        difficulty: 'Easy',
        timeElapsed: 0,
        notes: 'Two sum very cool. This is a very long description that I am using to limit test the size of each row, hopefully it does not look too crazy otherwise I am going to have to do some styling to make it work which i do not want to do because styling things is kind of boring the logic of frontend stuff is wayyyy more interesting you know what I mean?',
        tags: [{ name: 'hashmap' }, { name: 'array' }],
    },
    {
        id: 6,
        name: 'Merge Two Sorted Lists',
        difficulty: 'Hard',
        timeElapsed: 300020,
        notes: '',
        tags: [{ name: 'array' }, { name: 'sorting' }],
    },
];
