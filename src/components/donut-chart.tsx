'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import RadianTooltip from './radian-tooltip';

type DonutChartProps = {
    data: { percentage: number; difficulty: 'Easy' | 'Medium' | 'Hard' }[];
};

const colorMap = {
    Easy: '#16a34a',
    Medium: '#d97706',
    Hard: '#dc2626',
};

export default function DonutChart({ data }: DonutChartProps) {
    return (
        <PieChart width={650} height={400}>
            <Pie
                labelLine={false}
                label={RadianTooltip}
                data={data}
                cx={300}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                dataKey={'percentage'}
                paddingAngle={3}
            >
                {data.map((entry, index) => (
                    <Cell key={index} fill={colorMap[entry.difficulty]} />
                ))}
            </Pie>
        </PieChart>
    );
}
