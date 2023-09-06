import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
    return (
        <>
            <section className="container flex flex-col gap-6 py-8 md:py-12">
                <div className="w-[min(80vw,70rem)] mx-auto flex flex-col gap-8">
                    <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        Dashboard
                    </h1>

                    <Tabs defaultValue="solved-problems" className="w-[24rem]">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="solved-problems">
                                Solved Problems
                            </TabsTrigger>
                            <TabsTrigger value="time-graph">
                                Time Graph
                            </TabsTrigger>
                            <TabsTrigger value="statistics">
                                Statistics
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="solved-problems">
                            Solved Problems Table here
                        </TabsContent>
                        <TabsContent value="time-graph">
                            Time graph for each difficulty
                        </TabsContent>
                        <TabsContent value="statistics">
                            Difficulty and topics (top ~10) percentages
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
