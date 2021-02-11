import React from 'react';
import IncompleteTaskRow from './IncompleteTaskRow';
import { useSelector } from 'react-redux';
import { Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);
    return (
        <Table size={'small'}>
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Assigned On</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Project Number</TableCell>
                    <TableCell>Hours Permitted</TableCell>
                    <TableCell>Hours Worked</TableCell>
                    <TableCell>No. Reviews</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={'action-cell'}>
                {incompletedTasks.map((row) => (
                    <IncompleteTaskRow key={row.id} row={row} />
                ))}
            </TableBody>
        </Table>
    );
};

export default IncompleteTasksTable;
