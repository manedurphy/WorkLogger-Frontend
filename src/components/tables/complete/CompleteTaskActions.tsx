/* eslint-disable react/prop-types */
import React from 'react';
import DeleteButton from '../buttons/Delete';
import LogButton from '../buttons/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTaskActions: React.FC<TaskActionsProps> = ({ taskId }): JSX.Element => {
    const { completeTasks } = useSelector(getTasksState);
    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <DeleteButton taskId={taskId} />
            <LogButton taskId={taskId} tasks={completeTasks} />
        </Box>
    );
};

export default CompleteTaskActions;
