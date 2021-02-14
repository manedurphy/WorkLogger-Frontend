import React from 'react';
import useMainStyles from '../mainStyles';
import Title from './Title';
import LogTable from '../../tables/log/LogTable';
import { Box, Paper } from '@material-ui/core';

const LogComponent = (): JSX.Element => {
    const { paper } = useMainStyles();
    return (
        <Paper className={paper}>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Task 2 Log</Title>
                </Box>
            </Box>
            <LogTable />
        </Paper>
    );
};

export default LogComponent;
