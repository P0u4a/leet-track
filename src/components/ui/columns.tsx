'use client';

import { ColumnDef } from '@tanstack/react-table';
import { colorDifficulty } from '@/lib/formatting/color-difficulty';
import { formatTime } from '@/lib/formatting/format-time';
import { ArrowUpDown } from 'lucide-react';
import { Button } from './button';
import Tag from './tag';
import ActionsColumn from './actions-column';
import type { Question } from '@/types/questions';

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
                <div className="flex items-center justify-center">
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Time
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
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
        id: 'notes',
        cell: ({ row }) => {
            const notes = row.getValue('notes') as string;
            return <p className="max-w-md">{notes}</p>;
        },
    },
    {
        id: 'actions',
        cell: ({ row, table }) => {
            return <ActionsColumn row={row} table={table} />;
        },
    },
];
