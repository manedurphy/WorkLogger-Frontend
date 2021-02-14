/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from '../buttons/Edit';
import DeleteButton from '../buttons/Delete';
import CompleteButton from '../buttons/Complete';
import LogButton from '../buttons/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTaskActions: React.FC<TaskActionsProps> = ({ taskId }): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);
    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <EditButton taskId={taskId} />
            <DeleteButton taskId={taskId} />
            <CompleteButton taskId={taskId} />
            <LogButton taskId={taskId} tasks={incompletedTasks} />
        </Box>
    );
};

export default IncompleteTaskActions;
