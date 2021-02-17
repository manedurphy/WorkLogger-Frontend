import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import RefreshIcon from '@material-ui/icons/Refresh';
import CompleteTasksTable from '../../tables/tasksTable/complete/CompleteTasksTable';
import { Box, IconButton, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { handleGetCompleteTasks } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTasks = (): JSX.Element => {
    const dispatch = useDispatch();
    const { paper, header } = useMainStyles();
    return (
        <Paper className={paper}>
            <Box className={header}>
                <Title>Complete Tasks</Title>
                <IconButton size={'small'} onClick={() => dispatch(handleGetCompleteTasks())}>
                    <RefreshIcon />
                </IconButton>
            </Box>
            <CompleteTasksTable />
        </Paper>
    );
};

export default CompleteTasks;
