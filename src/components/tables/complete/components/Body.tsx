import React from 'react';
import CompleteTaskRow from './Row';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../../redux/slices/tasks/tasksSlice';
import { TableBody } from '@material-ui/core';

const TaskInfo = (): JSX.Element => {
    const { completeTasks } = useSelector(getTasksState);
    return (
        <TableBody className={'action-cell'}>
            {completeTasks.map((task) => (
                <CompleteTaskRow key={task.id} task={task} />
            ))}
        </TableBody>
    );
};

export default TaskInfo;
