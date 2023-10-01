'use client';
import { formatTime } from '@/lib/formatting/format-time';
import {
    Chart as ChartJS,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type TimeChartProps = {
    data: {
        easy: {
            x: string;
            y: number;
        }[];
        medium: {
            x: string;
            y: number;
        }[];
        hard: {
            x: string;
            y: number;
        }[];
    };
};

export default function TimeChart({ data }: TimeChartProps) {
    return (
        <Line
            data={{
                datasets: [
                    {
                        data: data.easy,
                        hoverBackgroundColor: '#16a34a',
                        backgroundColor: 'rgb(22 163 74 / 0.75)',
                        borderColor: '#16a34a',
                        label: 'Easy',
                    },
                    {
                        data: data.medium,
                        hoverBackgroundColor: '#d97706',
                        backgroundColor: 'rgb(217 119 6 / 0.75)',
                        borderColor: '#d97706',
                        label: 'Medium',
                    },
                    {
                        data: data.hard,
                        hoverBackgroundColor: '#dc2626',
                        backgroundColor: 'rgb(220 38 38 / 0.75)',
                        borderColor: '#dc2626',
                        label: 'Hard',
                    },
                ],
            }}
            options={{
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                        grid: { display: false },
                    },
                    y: {
                        ticks: {
                            callback: (v) => formatTime(v as number),
                            stepSize: 10,
                        },

                        grid: { display: false },
                    },
                },
                plugins: {
                    tooltip: {
                        backgroundColor: '#f5f5f4',
                        titleColor: '#0c0a09',
                        bodyColor: '#0c0a09',
                        callbacks: {
                            label: (context) => {
                                const datapoint =
                                    context.dataset.data[context.dataIndex];
                                if (typeof datapoint === 'number')
                                    return formatTime(datapoint);

                                if (datapoint?.y === undefined) return;
                                return formatTime(datapoint.y);
                            },
                        },
                    },
                },
            }}
        />
    );
}
