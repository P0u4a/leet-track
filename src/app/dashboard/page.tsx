'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { formatTime } from '@/lib/format-time';

type QuestionData = {
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    timeElapsed: number;
    notes: string | null;
};

export default function Dashboard() {
    const [userQuestions, setUserQuestions] = useState<QuestionData[]>();
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch('/api/get-questions');
            // TODO Send toast
            if (res.status !== 200) return;
            const data = await res.json();
            setUserQuestions(data);
        };

        fetchQuestions();
    });

    return (
        <>
            <section className="container flex flex-col gap-6 py-8 md:py-12">
                <div className="w-[min(80vw,70rem)] mx-auto flex flex-col gap-8">
                    <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        Dashboard
                    </h1>

                    <Tabs defaultValue="solved-problems">
                        <TabsList className="grid md:w-full grid-cols-2 md:grid-cols-4 h-full">
                            <TabsTrigger value="solved-problems">
                                Solved Problems
                            </TabsTrigger>
                            <TabsTrigger value="time-graph">
                                Time Graph
                            </TabsTrigger>
                            <TabsTrigger value="diff-ratios">
                                Difficulty Ratios
                            </TabsTrigger>
                            <TabsTrigger value="topic-freq">
                                Topic Frequencies
                            </TabsTrigger>
                        </TabsList>
                        <div className="pt-12">
                            <TabsContent value="solved-problems">
                                <div className="flex flex-col gap-4">
                                    {userQuestions?.map(
                                        ({
                                            name,
                                            difficulty,
                                            timeElapsed,
                                            notes,
                                        }) => {
                                            return (
                                                <p
                                                    key={name}
                                                >{`${name} | ${difficulty} | ${formatTime(
                                                    timeElapsed
                                                )} | ${notes ? notes : ''}`}</p>
                                            );
                                        }
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="time-graph">
                                Time graph for each difficulty
                            </TabsContent>
                            <TabsContent value="diff-ratios">
                                Difficulty ratios as circular percentages
                            </TabsContent>
                            <TabsContent value="topic-freq">
                                Topic frequencies as columns of loading bars
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
