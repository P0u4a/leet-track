'use client';

import { ColumnDef } from '@tanstack/react-table';
import { colorDifficulty } from '@/lib/formatting/color-difficulty';
import { formatTime } from '@/lib/formatting/format-time';
import { ArrowUpDown } from 'lucide-react';
import { Button } from './button';
import Tag from './tag';
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
export const columns: ColumnDef<Question>[] = [
    {
        accessorKey: 'name',
        header: 'Problem',
    },
    {
        accessorKey: 'difficulty',
        header: 'Difficulty',
        cell: ({ row }) => {
            const difficulty = row.getValue('difficulty') as
                | 'Easy'
                | 'Medium'
                | 'Hard';
            const color = colorDifficulty(difficulty);
            return <div className={`${color}`}>{difficulty}</div>;
        },
    },
    {
        accessorKey: 'timeElapsed',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const time = row.getValue('timeElapsed') as number;
            const formattedTime = formatTime(time);
            return <div className="text-center">{formattedTime}</div>;
        },
    },
    {
        accessorKey: 'tags',
        header: 'Tags',
        cell: ({ row }) => {
            const tags = row.getValue('tags') as { name: string }[];
            const formattedTags = tags.map(({ name }) => {
                return <Tag key={name} name={name} />;
            });

            return (
                <div className="flex flex-row flex-wrap items-center justify-start gap-1 max-w-sm">
                    {formattedTags}
                </div>
            );
        },
    },
    {
        accessorKey: 'notes',
        header: 'Notes',
        cell: ({ row }) => {
            const notes = row.getValue('notes') as string;
            return <div className="max-w-md">{notes}</div>;
        },
    },
];
