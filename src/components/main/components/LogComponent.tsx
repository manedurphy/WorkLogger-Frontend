import React from 'react';
import useMainStyles from '../mainStyles';
import Title from './Title';
import LogTable from '../../tables/log/LogTable';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';
import { getLogState } from '../../../redux/slices/log/logSlice';
import { DisplayTasksProps } from '../types';

const LogComponent: React.FC<DisplayTasksProps> = ({ showLog }): JSX.Element => {
    const { paper } = useMainStyles();
    const { log } = useSelector(getLogState);
    return (
        <Fade in={showLog} timeout={500} unmountOnExit exit={false}>
            <Paper className={paper}>
                <Title>{log[0] ? `Project ${log[0].projectNumber} Log` : 'No Log For This Task'}</Title>
                <LogTable />
            </Paper>
        </Fade>
    );
};

export default LogComponent;
