/* eslint-disable react/prop-types */
import React from 'react';
import DeleteButton from '../buttons/Delete';
import LogButton from '../buttons/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';

const IncompleteTaskActions: React.FC<TaskActionsProps> = ({ taskId }): JSX.Element => (
    <Box display={'flex'} justifyContent={'space-evenly'}>
        <DeleteButton taskId={taskId} />
        <LogButton taskId={taskId} />
    </Box>
);

export default IncompleteTaskActions;
