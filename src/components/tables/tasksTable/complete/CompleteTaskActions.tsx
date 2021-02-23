/* eslint-disable react/prop-types */
import React from 'react';
import DeleteButton from '../../buttons/task/Delete';
import LogButton from '../../buttons/task/Log';
import useTasksTableStyles from '../styles';
import Box from '@material-ui/core/Box';
import { TaskActionsProps } from '../../types';

const CompleteTaskActions: React.FC<TaskActionsProps> = ({ task }): JSX.Element => {
    const { flexSpace } = useTasksTableStyles();
    return (
        <Box className={flexSpace}>
            <DeleteButton taskId={task.id} command={'deleteComplete'} />
            <LogButton log={task.Logs} />
        </Box>
    );
};

export default CompleteTaskActions;
