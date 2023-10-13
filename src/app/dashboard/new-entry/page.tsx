'use client';

import { useState } from 'react';
import Timer from '@/components/timer';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { addEntry } from '@/lib/queries/add-entry';
import toast from 'react-hot-toast';

export default function NewEntry() {
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleTimerUpdate = (timerData: number, runningData: boolean) => {
        setTimeElapsed(timerData);
        setIsRunning(runningData);
    };

    async function handleSubmit() {
        const res = await addEntry({ title, time: timeElapsed, notes });
        switch (res) {
            case 200:
                toast.success('Entry added successfully!');
                break;
            case 400:
                toast.error('Cannot find LeetCode problem.');
                break;
            case 500:
                toast.error('Something went wrong. Please try again.');
            default:
                break;
        }
    }
    return (
        <>
            <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl pb-12">
                New Entry
            </h1>

            <div className="flex flex-col gap-2">
                <Label>Problem Title</Label>
                <Input
                    placeholder="e.g. Two Sum"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="max-w-sm"
                />
            </div>

            <div className="flex flex-col gap-2">
                <Label>Stopwatch</Label>
                <Timer onTimerUpdate={handleTimerUpdate} />
            </div>

            <div className="flex flex-col gap-2">
                <Label>Notes (optional)</Label>
                <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes about the problem"
                    className="max-w-sm h-40"
                />
            </div>

            <Button
                onClick={async () => {
                    setLoading(true);
                    await handleSubmit();
                    setLoading(false);
                }}
                className="max-w-fit"
                disabled={title && isRunning ? false : true}
            >
                {loading ? <Loader2 className="animate-spin" /> : 'Add Entry'}
            </Button>
        </>
    );
}
