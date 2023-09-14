'use client';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type DonutChartProps = {
    data: number[];
};

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ data }: DonutChartProps) {
    return (
        <Doughnut
            data={{
                labels: ['Easy', 'Medium', 'Hard'],
                datasets: [
                    {
                        data: data,
                        hoverBackgroundColor: ['#16a34a', '#d97706', '#dc2626'],
                        backgroundColor: [
                            'rgb(22 163 74 / 0.75)',
                            'rgb(217 119 6 / 0.75)',
                            'rgb(220 38 38 / 0.75)',
                        ],
                        borderColor: ['#16a34a', '#d97706', '#dc2626'],
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            }}
            options={{
                plugins: {
                    tooltip: {
                        backgroundColor: '#f5f5f4',
                        titleColor: '#0c0a09',
                        bodyColor: '#0c0a09',
                        callbacks: {
                            label: (context) => {
                                return `${
                                    context.dataset.data[context.dataIndex]
                                }%`;
                            },
                        },
                    },
                },
            }}
        />
    );
}
