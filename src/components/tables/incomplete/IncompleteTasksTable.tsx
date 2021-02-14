import React, { Fragment } from 'react';
import Body from './components/TaskRowBody';
import Head from './components/Head';
import useTaskTableStyles from './styles';
import { Box, Table } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const { add } = useTaskTableStyles();
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Table size={'small'}>
                <Head />
                <Body />
            </Table>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <AddCircle className={add} onClick={() => dispatch(setShowCreateNewTaskForm(true))} />
            </Box>
        </Fragment>
    );
};

export default IncompleteTasksTable;
