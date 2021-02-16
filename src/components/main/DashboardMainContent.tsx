import React from 'react';
import IncompleteTasks from './components/IncompleteTasks';
import Log from './components/LogComponent';
import NewTaskForm from '../forms/task/NewTaskForm';
import useMainStyles from './mainStyles';
import EditTaskForm from '../forms/task/EditTaskForm';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getLogState } from '../../redux/slices/log/logSlice';

const DashboardMainContent = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog } = useSelector(getLogState);

    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <IncompleteTasks /> : <Log />}
            <NewTaskForm />
            <EditTaskForm />
        </Container>
    );
};

export default DashboardMainContent;
