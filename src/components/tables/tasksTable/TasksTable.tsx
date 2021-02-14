import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import { Table } from '@material-ui/core';
import { TasksTableProps } from './types';

const TasksTable: React.FC<TasksTableProps> = ({ tasks, Dropdown }): JSX.Element => (
    <Table size={'small'}>
        <Head />
        <Body tasks={tasks} Dropdown={Dropdown} />
    </Table>
);

export default TasksTable;
