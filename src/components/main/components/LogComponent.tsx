import React from 'react';
import useMainStyles from '../mainStyles';
import Title from './Title';
import LogTable from '../../tables/log/LogTable';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getLogState } from '../../../redux/slices/log/logSlice';

const LogComponent = (): JSX.Element => {
    const { paper } = useMainStyles();
    const { log } = useSelector(getLogState);
    return (
        <Paper className={paper}>
            <Title>Project {log[0].projectNumber} Log</Title>
            <LogTable />
        </Paper>
    );
};

export default LogComponent;
