'use client';

import { ColumnDef } from '@tanstack/react-table';
import { colorDifficulty } from '@/lib/formatting/color-difficulty';
import { formatTime } from '@/lib/formatting/format-time';
import { deleteQuestion } from '@/lib/queries/delete-question';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from './button';
import Tag from './tag';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
        cell: ({ row }) => {
            const notes = row.getValue('notes') as string;
            return <div className="max-w-md">{notes}</div>;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const question = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            className="text-rose-600 hover:cursor-pointer font-semibold"
                            onClick={() => {
                                // Delete question
                                deleteQuestion(question.id);
                                // TODO Update state without fullpage reload
                                location.reload();
                            }}
                        >
                            Delete Entry
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
