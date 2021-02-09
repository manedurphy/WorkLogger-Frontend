import React from 'react';
import Title from './Title';
import { BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { getIncompleteTasksState } from '../../../redux/slices/tasks/tasksSlice';

const Chart = (): JSX.Element => {
    const tasks = useSelector(getIncompleteTasksState);
    const data: { name: string; completion: number }[] = [];

    for (let i: number = 0; i < 5; i++) {
        if (tasks[i]) {
            data.push({
                name: tasks[i].name,
                completion: (1 - tasks[i].hoursRemaining / tasks[i].hoursAvailableToWork) * 100,
            });
        }
    }
    return (
        <React.Fragment>
            <Title>Current Tasks</Title>
            <ResponsiveContainer>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: '%', position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completion" fill="purple" />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};
export default Chart;
