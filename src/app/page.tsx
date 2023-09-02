import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Timer, LineChart, Zap } from 'lucide-react';
export default function Home() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href={
                            'https://chrome.google.com/webstore/category/extensions'
                        }
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Download for Chrome
                    </Link>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-4">
                        Track your Leetcode Progress with just one click
                    </h1>
                    <p className="max-w-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        A chrome extension for logging leetcode questions and
                        visualising your progress.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className={cn(buttonVariants({ size: 'lg' }))}
                        >
                            Get Started
                        </Link>
                        <Link
                            href={'https://github.com/P0u4a'}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'lg',
                                })
                            )}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
            <section
                id="features"
                className="container space-y-6 py-8 md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                        Features
                    </h2>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-auto md:flex-row md:max-w-[64rem]">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Timer />
                            <div className="space-y-2">
                                <h3 className="font-bold">Stopwatch</h3>
                                <p className="text-sm text-muted-foreground">
                                    Non-intrusive timer for conveniently
                                    tracking your solve times
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Zap />
                            <div className="space-y-2">
                                <h3 className="font-bold">Auto Logging</h3>
                                <p className="text-sm text-muted-foreground">
                                    No manual input needed, log your solved
                                    problems and times with a single click.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <LineChart />
                            <div className="space-y-2">
                                <h3 className="font-bold">
                                    Data Visualisation
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Visualise your progress through the
                                    auto-generated graphs based on your solve
                                    times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="open-source"
                className="container py-8 md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold pb-2">
                        Begin Solving Today
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Tracking your Leetcode progress is a tried and tested
                        way to achieve success.
                    </p>
                </div>
            </section>
        </>
    );
}
