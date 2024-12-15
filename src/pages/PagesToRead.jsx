import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
    // Sample data
    const readList = [
        { name: 'Book A', totalPages: 300 },
        { name: 'Book B', totalPages: 450 },
        { name: 'Book C', totalPages: 150 },
    ];

    // Custom shape for the bar
    const CustomBarShape = (props) => {
        const { x, y, width, height, fill } = props;
        return (
            <g>
                <rect x={x} y={y} width={width} height={height} fill={fill} rx="10" />
                <text
                    x={x + width / 2}
                    y={y - 10}
                    fill="#000"
                    textAnchor="middle"
                    fontSize="12px"
                >
                    {height}
                </text>
            </g>
        );
    };

    return (
        <div style={{ width: '100%', height: '500px', textAlign: 'center', marginTop: '20px' }}>
            <h1>Pages to Read</h1>
            <ResponsiveContainer width="90%" height="80%">
                <BarChart data={readList} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<CustomBarShape />}
                        barSize={50}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;
