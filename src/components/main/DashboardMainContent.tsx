import React from 'react';
import IncompleteTasks from './components/IncompleteTasks';
import Log from './components/LogComponent';
import NewTaskForm from '../forms/task/NewTaskForm';
import useMainStyles from './mainStyles';
import EditLogForm from '../forms/log/EditLogForm';
import EditTaskForm from '../forms/task/EditTaskForm';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getLogState } from '../../redux/slices/log/logSlice';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const DashboardMainContent = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog } = useSelector(getLogState);
    const { edit, showCreateTaskForm } = useSelector(getTasksState);

    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <IncompleteTasks /> : <Log />}
            {!edit && <NewTaskForm />}
            {!showCreateTaskForm && <EditTaskForm />}
            <EditLogForm />
        </Container>
    );
};

export default DashboardMainContent;
