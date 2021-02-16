import React from 'react';
import Head from './Head';
import Body from './Body';
import { Table } from '@material-ui/core';
import { TasksTableProps } from '../../types';

const TasksTable: React.FC<TasksTableProps> = ({ tasks, Actions }): JSX.Element => (
    <Table size={'small'}>
        <Head />
        <Body tasks={tasks} Actions={Actions} />
    </Table>
);

export default TasksTable;
