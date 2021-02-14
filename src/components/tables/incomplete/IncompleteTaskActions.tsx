/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from '../buttons/Edit';
import DeleteButton from '../buttons/Delete';
import CompleteButton from '../buttons/Complete';
import LogButton from '../buttons/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';

const IncompleteTaskActions: React.FC<TaskActionsProps> = ({ taskId }): JSX.Element => (
    <Box display={'flex'} justifyContent={'space-evenly'}>
        <EditButton taskId={taskId} />
        <DeleteButton taskId={taskId} />
        <CompleteButton taskId={taskId} />
        <LogButton taskId={taskId} />
    </Box>
);

export default IncompleteTaskActions;