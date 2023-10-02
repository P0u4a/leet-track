'use client';

import { useRef } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { deleteQuestion } from '@/lib/queries/delete-question';
import { editNotes } from '@/lib/queries/edit-notes';
import { Button } from './button';
import { Textarea } from './textarea';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Row, Table } from '@tanstack/react-table';
import type { Question } from '@/types/questions';

type ActionsColumnProps = {
    row: Row<Question>;
    table: Table<Question>;
};

export default function ActionsColumn({ row, table }: ActionsColumnProps) {
    const ref = useRef<HTMLTextAreaElement>(null);
    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="hover:cursor-pointer font-semibold">
                            Edit Notes
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem
                        className="text-rose-600 hover:cursor-pointer font-semibold"
                        onClick={async () => {
                            await deleteQuestion(row.original.id);
                            table.options.meta?.deleteRow(row.index);
                        }}
                    >
                        Delete Entry
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Notes</DialogTitle>
                </DialogHeader>
                <Textarea
                    className="h-32"
                    defaultValue={row.getValue('notes')}
                    ref={ref}
                />
                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button
                            type="submit"
                            onClick={async () => {
                                const newNote = ref.current?.value;
                                if (!newNote) return;
                                table.options.meta?.editCell(
                                    newNote,
                                    row.index,
                                    'notes'
                                );
                                await editNotes(row.original.id, newNote);
                            }}
                        >
                            Save
                        </Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
