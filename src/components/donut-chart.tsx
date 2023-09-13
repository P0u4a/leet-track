'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type {
    ChartOptions,
    DoughnutController,
    DoughnutDataPoint,
    TooltipModel,
} from 'chart.js';

export const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
        {
            data: [60, 30, 10],
            hoverBackgroundColor: ['#16a34a', '#d97706', '#dc2626'],
            backgroundColor: [
                'rgb(22 163 74 / 0.75)',
                'rgb(217 119 6 / 0.75)',
                'rgb(220 38 38 / 0.75)',
            ],
            borderColor: ['#16a34a', '#d97706', '#dc2626'],
            borderWidth: 1,
            hoverOffset: 4,
            spacing: 3,
        },
    ],
};

const customTooltip = (tooltipModel: any) => {
    const dataset = data.datasets[tooltipModel.datasetIndex];
    const currentValue = dataset.data[tooltipModel.index];

    // Custom tooltip label with a symbol (e.g., %)
    return `${currentValue}%`;
};

ChartJS.register(ArcElement, Tooltip);

export default function DonutChart() {
    const options: ChartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: customTooltip,
                },
            },
        },
    };
    return <Doughnut data={data} options={options} />;
}
