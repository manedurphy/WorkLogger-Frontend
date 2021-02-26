import React from 'react';
import Head from './Head';
import Body from './Body';
import Table from '@material-ui/core/Table';
import { TasksTableProps } from '../../types';

const TasksTable: React.FC<TasksTableProps> = ({ tasks, Actions }): JSX.Element | null =>
    tasks.length > 0 ? (
        <Table size={'small'}>
            <Head />
            <Body tasks={tasks} Actions={Actions} />
        </Table>
    ) : null;

export default TasksTable;
