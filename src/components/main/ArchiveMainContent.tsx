import React, { Fragment } from 'react';
import Log from './components/LogComponent';
import CompleteTasks from './components/CompleteTasks';
import EditLogForm from '../forms/log/EditLogForm';
import useMainStyles from './mainStyles';
import Container from '@material-ui/core/Container';
import LoadingTasks from '../ui/LoadingTasks';
import { useSelector } from 'react-redux';
import { getLogState } from '../../redux/slices/log/logSlice';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';

const MainComplete = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog } = useSelector(getLogState);
    const { edit, showCreateTaskForm, loading } = useSelector(getTasksState);

    return (
        <Container maxWidth={'lg'} className={container}>
            {loading ? (
                <LoadingTasks />
            ) : (
                <Fragment>
                    <CompleteTasks showLog={showLog} /> <Log showLog={showLog} />
                </Fragment>
            )}
            {!edit && !showCreateTaskForm && <EditLogForm />}
        </Container>
    );
};

export default MainComplete;
