import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import RefreshIcon from '@material-ui/icons/Refresh';
import CompleteTasksTable from '../../tables/tasksTable/complete/CompleteTasksTable';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux';
import { handleGetCompleteTasks } from '../../../redux/slices/tasks/tasksSlice';
import { DisplayTasksProps } from '../types';

const CompleteTasks: React.FC<DisplayTasksProps> = ({ showLog }): JSX.Element => {
    const dispatch = useDispatch();
    const { paper, header } = useMainStyles();
    return (
        <Fade in={!showLog} timeout={500} unmountOnExit exit={false}>
            <Paper className={paper}>
                <Box className={header}>
                    <Title>Complete Tasks</Title>
                    <IconButton size={'small'} onClick={() => dispatch(handleGetCompleteTasks())}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
                <CompleteTasksTable />
            </Paper>
        </Fade>
    );
};

export default CompleteTasks;
