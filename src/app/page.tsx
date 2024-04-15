import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { auth } from '@clerk/nextjs';
import { Timer, LineChart, Zap } from 'lucide-react';

export default function Home() {
    const { userId } = auth();
    return (
        <>
            <section className="space-y-6 pb-8 pt-10">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Badge
                        className="max-w-sm rounded-md"
                        variant={'secondary'}
                    >
                        <p className="text-base">
                            🚨 Since PlanetScale has removed their free tier,
                            this demo is now deprecated. Feel free to run it
                            locally by cloning it on GitHub! 🚨
                        </p>
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pb-4">
                        Track your Leetcode progress with just one click
                    </h1>
                    <p className="max-w-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        LeetTrack is <em>the</em> app for logging leetcode
                        questions and visualising your progress.
                    </p>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <Link
                            href={`${userId ? '/dashboard' : '/sign-in'}`}
                            className={cn(buttonVariants({ size: 'lg' }))}
                        >
                            Get Started
                        </Link>
                        <Link
                            href={'https://github.com/P0u4a/leet-track'}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'lg',
                                })
                            )}
                        >
                            View on GitHub
                        </Link>
                    </div>
                </div>
            </section>
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                        Features
                    </h2>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-auto md:flex-row md:max-w-[64rem]">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <Timer />
                            <div className="space-y-2 pt-2">
                                <h3 className="font-bold">Stopwatch</h3>
                                <p className="text-sm text-muted-foreground">
                                    Non-intrusive timer for conveniently
                                    tracking your solve times
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <Zap />
                            <div className="space-y-2 pt-2">
                                <h3 className="font-bold">Auto Logging</h3>
                                <p className="text-sm text-muted-foreground">
                                    Effortlessly log your solved problems with a
                                    single click.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <LineChart />
                            <div className="space-y-2 pt-2">
                                <h3 className="font-bold">
                                    Data Visualisation
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Visualise your progress through
                                    auto-generated graphs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold pb-2">
                        Begin tracking today
                    </h2>
                    <p className="max-w-sm leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-12">
                        Tracking your Leetcode progress is a tried and tested
                        way to achieve success.
                    </p>
                </div>
            </section>
        </>
    );
}
