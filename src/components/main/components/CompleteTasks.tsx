import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import RefreshIcon from '@material-ui/icons/Refresh';
import CompleteTasksTable from '../../tables/tasksTable/complete/CompleteTasksTable';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
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
