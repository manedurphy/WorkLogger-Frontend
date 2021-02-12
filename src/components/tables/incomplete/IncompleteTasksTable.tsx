import React from 'react';
import IncompleteTaskRow from './components/IncompleteTaskRow';
import Head from './components/Head';
import { useSelector } from 'react-redux';
import { Table, TableBody } from '@material-ui/core';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);
    return (
        <Table size={'small'}>
            <Head />
            <TableBody className={'action-cell'}>
                {incompletedTasks.map((row) => (
                    <IncompleteTaskRow key={row.id} row={row} />
                ))}
            </TableBody>
        </Table>
    );
};

export default IncompleteTasksTable;
