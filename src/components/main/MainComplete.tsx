import React from 'react';
import CompleteTasks from './components/CompleteTasks';
import Log from './components/LogComponent';
import TaskForm from '../forms/task/TaskForm';
import useMainStyles from './mainStyles';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const MainComplete = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog, showCreateTaskForm } = useSelector(getTasksState);
    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <CompleteTasks /> : <Log />}
            {showCreateTaskForm && <TaskForm />}
        </Container>
    );
};

export default MainComplete;
