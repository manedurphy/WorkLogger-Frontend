import React from 'react';
import Title from './Title';
import CompleteTasksTable from '../../tables/complete/CompleteTasksTable';
import { Box } from '@material-ui/core';

const CompleteTasks = (): JSX.Element => {
    return (
        <React.Fragment>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Complete Tasks</Title>
                </Box>
            </Box>
            <CompleteTasksTable />
        </React.Fragment>
    );
};

export default CompleteTasks;
