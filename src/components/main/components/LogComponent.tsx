import React, { Fragment } from 'react';
import Title from './Title';
import LogTable from '../../tables/log/LogTable';
import { Box } from '@material-ui/core';

const LogComponent = (): JSX.Element => {
    return (
        <Fragment>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Title>Task 2 Log</Title>
                </Box>
            </Box>
            <LogTable />
        </Fragment>
    );
};

export default LogComponent;
