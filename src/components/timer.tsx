'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, Pause, RotateCw } from 'lucide-react';
import { formatTime } from '@/lib/formatting/format-time';

type TimerProps = {
    onTimerUpdate: (currTime: number, isRunning: boolean) => void;
};

export default function Timer({ onTimerUpdate }: TimerProps) {
    const [currTime, setCurrTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | number | undefined>();
    useEffect(() => {
        if (isRunning) {
            const startTime = Date.now() - currTime;

            timerRef.current = setInterval(() => {
                setCurrTime(Date.now() - startTime);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        // Clear the timer when component unmounts.
        return () => clearInterval(timerRef.current);
    }, [isRunning, currTime]);

    const toggleTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
        onTimerUpdate(currTime, isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setCurrTime(0);
        onTimerUpdate(0, false);
    };

    return (
        <div
            id="timer"
            className="max-w-sm flex flex-col gap-6 p-5 items-center rounded-2xl border-solid border-input border-2 bg-background"
        >
            <Badge className="max-w-fit" variant={'secondary'}>
                <span className="text-4xl">{formatTime(currTime)}</span>
            </Badge>

            <div className="flex flex-row gap-3">
                <Button variant={'outline'} onClick={resetTimer}>
                    <RotateCw />
                </Button>

                {isRunning ? (
                    <Button variant={'outline'} onClick={toggleTimer}>
                        <Pause />
                    </Button>
                ) : (
                    <Button variant={'outline'} onClick={toggleTimer}>
                        <Play />
                    </Button>
                )}
            </div>
        </div>
    );
}
