import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import IncompleteTasksTable from '../../tables/tasksTable/incomplete/IncompleteTasksTable';
import { Box, Paper } from '@material-ui/core';

const IncompleteTasks = (): JSX.Element => {
    const { paper } = useMainStyles();
    return (
        <Paper className={paper}>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Incomplete Tasks</Title>
                </Box>
            </Box>
            <IncompleteTasksTable />
        </Paper>
    );
};

export default IncompleteTasks;
