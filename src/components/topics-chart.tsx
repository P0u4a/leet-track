'use client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type TopicsChartProps = {
    data: {
        labels: string[];
        counts: number[];
    };
};

export default function TopicsChart({ data }: TopicsChartProps) {
    return (
        <Bar
            data={{
                labels: data.labels,
                datasets: [
                    {
                        data: data.counts,
                        label: 'Count',
                        backgroundColor: 'rgb(2 132 199 / 0.9)',
                        hoverBackgroundColor: '#0284c7',
                    },
                ],
            }}
            options={{
                scales: {
                    x: {
                        grid: { display: false },
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            stepSize: 1,
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        backgroundColor: '#f5f5f4',
                        titleColor: '#0c0a09',
                        bodyColor: '#0c0a09',
                    },
                },
            }}
        />
    );
}
