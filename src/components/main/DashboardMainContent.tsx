import React from 'react';
import IncompleteTasks from './components/IncompleteTasks';
import Log from './components/LogComponent';
import NewTaskForm from '../forms/task/NewTaskForm';
import useMainStyles from './mainStyles';
import EditLogForm from '../forms/log/EditLogForm';
import EditTaskForm from '../forms/task/EditTaskForm';
import AddHoursModal from '../modal/AddHoursModal';
import Container from '@material-ui/core/Container';
import Spinner from '../ui/Spinner';
import { useSelector } from 'react-redux';
import { getLogState } from '../../redux/slices/log/logSlice';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const DashboardMainContent = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog, showLogForm } = useSelector(getLogState);
    const { edit, showCreateTaskForm, loading } = useSelector(getTasksState);

    return (
        <Container maxWidth={'lg'} className={container}>
            {loading ? <Spinner /> : !showLog ? <IncompleteTasks /> : <Log />}
            {!edit && !showLogForm && <NewTaskForm />}
            {!showCreateTaskForm && !showLogForm && <EditTaskForm />}
            {!edit && !showCreateTaskForm && <EditLogForm />}
            <AddHoursModal />
        </Container>
    );
};

export default DashboardMainContent;
