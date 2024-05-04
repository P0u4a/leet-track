import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchQuestions } from '@/lib/queries/fetch-questions';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/data-table';
import { difficultyRatios } from '@/lib/formatting/diff-ratios';
import { solveTimes } from '@/lib/formatting/solve-times';
import { topicCounts } from '@/lib/formatting/topic-counts';
import DonutChart from '@/components/donut-chart';
import TimeChart from '@/components/time-chart';
import TopicsChart from '@/components/topics-chart';

export default async function Dashboard() {
    const questions = await fetchQuestions();
    console.log(questions);
    if (!questions) {
        return null;
    }
    return (
        <>
            <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                Dashboard
            </h1>

            <Tabs defaultValue="solved-problems">
                <TabsList className="grid md:w-full grid-cols-1 md:grid-cols-4 h-full">
                    <TabsTrigger value="solved-problems">
                        Solved Problems
                    </TabsTrigger>
                    <TabsTrigger value="time-graph">Time Graph</TabsTrigger>
                    <TabsTrigger value="diff-ratios">
                        Difficulty Ratios
                    </TabsTrigger>
                    <TabsTrigger value="topic-freq">
                        Topic Frequencies
                    </TabsTrigger>
                </TabsList>
                <div className="py-12">
                    <TabsContent value="solved-problems">
                        <DataTable columns={columns} data={questions} />
                    </TabsContent>
                    <TabsContent value="time-graph">
                        <TimeChart data={solveTimes(questions)} />
                    </TabsContent>
                    <TabsContent value="diff-ratios">
                        <div className="flex justify-center items-center">
                            <div className="max-w-md flex justify-center items-center">
                                <DonutChart
                                    data={difficultyRatios(questions)}
                                />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="topic-freq">
                        <TopicsChart data={topicCounts(questions)} />
                    </TabsContent>
                </div>
            </Tabs>
        </>
    );
}
