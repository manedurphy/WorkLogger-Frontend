/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from './buttons/Edit';
import DeleteButton from './buttons/Delete';
import CompleteButton from './buttons/Complete';
import LogButton from './buttons/Log';
import { useSelector } from 'react-redux';
import { IncompleteTaskActionsProps } from './types';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';
import { Box } from '@material-ui/core';

const IncompleteTaskActions: React.FC<IncompleteTaskActionsProps> = ({ taskId }): JSX.Element => {
    const { incompletedTasks } = useSelector(getTasksState);

    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <EditButton taskId={taskId} incompletedTasks={incompletedTasks} />
            <DeleteButton taskId={taskId} />
            <CompleteButton taskId={taskId} />
            <LogButton />
        </Box>
    );
};

export default IncompleteTaskActions;
