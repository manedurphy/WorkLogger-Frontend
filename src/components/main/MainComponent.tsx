import React from 'react';
import IncompleteTasks from './components/IncompleteTasks';
import LogsGridItem from './grid/LogGridItem';
import TaskForm from '../forms/task/TaskForm';
import useMainStyles from './mainStyles';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const Main = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog, showCreateTaskForm } = useSelector(getTasksState);
    return (
        <Container maxWidth={'lg'} className={container}>
            {/* <Breadcrumbs /> */}
            {!showLog ? <IncompleteTasks /> : <LogsGridItem />}
            {showCreateTaskForm && <TaskForm />}
        </Container>
    );
};

export default Main;
