import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import RefreshIcon from '@material-ui/icons/Refresh';
import IncompleteTasksTable from '../../tables/tasksTable/incomplete/IncompleteTasksTable';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { getTasksState, handleClickAdd, handleGetIncompleteTasks } from '../../../redux/slices/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddCircle from '@material-ui/icons/AddCircle';
import addStyles from '../../tables/tasksTable/styles';

const IncompleteTasks = (): JSX.Element => {
    const dispatch = useDispatch();
    const { loading, incompletedTasks } = useSelector(getTasksState);
    const { paper, header } = useMainStyles();
    const { add } = addStyles();
    return (
        <Paper className={paper}>
            <Box className={header}>
                <Title>Incomplete Tasks</Title>
                {loading && incompletedTasks.length === 0 && (
                    <div className={'dot-flashing'} style={{ marginRight: '5%' }}></div>
                )}
                {incompletedTasks.length ? (
                    <IconButton size={'small'} onClick={() => dispatch(handleGetIncompleteTasks())}>
                        <RefreshIcon />
                    </IconButton>
                ) : (
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <AddCircle className={add} onClick={() => dispatch(handleClickAdd())} />
                    </Box>
                )}
            </Box>
            <IncompleteTasksTable />
        </Paper>
    );
};

export default IncompleteTasks;
