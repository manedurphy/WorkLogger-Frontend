import React from 'react';
import Row from './Row';
import { TableBody } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../../redux/slices/tasks/tasksSlice';

const Body = (): JSX.Element => {
    const { currentTask } = useSelector(getTasksState);
    return (
        <TableBody className={'action-cell'}>
            {currentTask.Logs.map((logItem) => (
                <Row key={logItem.id} logItem={logItem} />
            ))}
        </TableBody>
    );
};

export default Body;
