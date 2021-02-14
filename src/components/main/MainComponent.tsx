import React from 'react';
import IncompleteGridItem from './grid/IncompleteGridItem';
import LogsGridItem from './grid/LogGridItem';
import TaskForm from '../forms/task/TaskForm';
import useMainStyles from './mainStyles';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const Main = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog, showCreateTaskForm } = useSelector(getTasksState);
    return (
        <Container maxWidth={'lg'} className={container}>
            {/* <Breadcrumbs /> */}
            <Grid container>
                {!showLog ? <IncompleteGridItem /> : <LogsGridItem />}
                {showCreateTaskForm && <TaskForm />}
            </Grid>
        </Container>
    );
};

export default Main;
