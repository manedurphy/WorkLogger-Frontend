import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import CompleteTasksTable from '../../tables/complete/CompleteTasksTable';
import { Box, Paper } from '@material-ui/core';

const CompleteTasks = (): JSX.Element => {
    const { paper } = useMainStyles();
    return (
        <Paper className={paper}>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Complete Tasks</Title>
                </Box>
            </Box>
            <CompleteTasksTable />
        </Paper>
    );
};

export default CompleteTasks;
