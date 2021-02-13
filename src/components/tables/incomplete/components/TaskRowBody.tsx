import React from 'react';
import IncompleteTaskRow from './IncompleteTaskRow';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../../redux/slices/tasks/tasksSlice';
import { TableBody } from '@material-ui/core';

const TaskInfo = (): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);
    return (
        <TableBody className={'action-cell'}>
            {incompletedTasks.map((task) => (
                <IncompleteTaskRow key={task.id} task={task} />
            ))}
        </TableBody>
    );
};

export default TaskInfo;
