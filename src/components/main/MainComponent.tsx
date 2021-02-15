import React from 'react';
import IncompleteTasks from './components/IncompleteTasks';
import Log from './components/LogComponent';
import TaskForm from '../forms/task/NewTaskForm';
import useMainStyles from './mainStyles';
import EditTaskForm from '../forms/task/EditTaskForm';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const Main = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog, showCreateTaskForm } = useSelector(getTasksState);
    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <IncompleteTasks /> : <Log />}
            {showCreateTaskForm && <TaskForm />}
            <EditTaskForm />
        </Container>
    );
};

export default Main;
