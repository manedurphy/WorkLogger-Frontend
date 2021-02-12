import React from 'react';
import Title from './Title';
import IncompleteTasksTable from '../../tables/incomplete/IncompleteTasksTable';
import { Box } from '@material-ui/core';

const IncompleteTasks = (): JSX.Element => {
    return (
        <React.Fragment>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Incomplete Tasks</Title>
                </Box>
            </Box>
            <IncompleteTasksTable />
        </React.Fragment>
    );
};

export default IncompleteTasks;
