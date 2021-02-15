/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from '../buttons/task/Edit';
import DeleteButton from '../buttons/task/Delete';
import CompleteButton from '../buttons/task/Complete';
import LogButton from '../buttons/task/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTaskActions: React.FC<TaskActionsProps> = ({ task }): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);
    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <EditButton task={task} />
            <DeleteButton taskId={task.id} />
            <CompleteButton taskId={task.id} />
            <LogButton taskId={task.id} tasks={incompletedTasks} />
        </Box>
    );
};

export default IncompleteTaskActions;
