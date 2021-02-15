/* eslint-disable react/prop-types */
import React from 'react';
import DeleteButton from '../buttons/task/Delete';
// import LogButton from '../buttons/task/Log';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../types';
// import { useSelector } from 'react-redux';
// import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTaskActions: React.FC<TaskActionsProps> = ({ task }): JSX.Element => {
    // const { completeTasks } = useSelector(getTasksState);
    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <DeleteButton taskId={task.id} />
            {/* <LogButton taskId={task.id} tasks={completeTasks} /> */}
        </Box>
    );
};

export default CompleteTaskActions;
