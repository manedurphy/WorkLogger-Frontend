import React from 'react';
import Title from './Title';
// import { useSelector } from 'react-redux';
import IncompleteTasksTable from '../../tables/incomplete/IncompleteTasksTable';
// import TaskLog from './Tables/TaskLog';
// import Spinner from './UI/Spinner';
// import { Logs, Tasks } from '../enums';
// import { GlobalContext } from '../context/GlobalState';
import { Box /*Fab, Fade, Link,  makeStyles */ } from '@material-ui/core';
// import { getTasksState } from '../redux/slices/tasks/tasksSlice';
// import SmallSpinner from './UI/SmallSpinner';
// import { Add as AddIcon } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//     seeMore: {
//         marginTop: theme.spacing(3),
//     },
//     link: {
//         cursor: 'pointer',
//     },
//     spinner: {
//         background: '#ffffff',
//     },
// }));

const TasksComponent: React.FC = (): JSX.Element => {
    // const classes = useStyles();
    // const { loading } = useSelector(getTasksState);
    // const { state, dispatch } = useContext(GlobalContext);
    // const { showLog } = state.log;
    // const { showForm, showCompleted } = state.tasks;
    // const [loading, setLoading] = useState(false);
    // const [loadingEditTask, setLoadingEditTask] = useState(false);

    return (
        <React.Fragment>
            <Box display="flex">
                <Box flexGrow={1}>
                    <Title>
                        {/* {loading
                            ? 'Loading'
                            : props.showCompleted && !showLog
                            ? 'Archive'
                            : props.showCompleted && showLog
                            ? 'Completed Task Log'
                            : !props.showCompleted && showLog
                            ? 'Task Log'
                            : 'Current Tasks'} */}
                        Incomplete Tasks
                    </Title>
                </Box>
                {/* <Box>{loadingEditTask && <SmallSpinner />}</Box> */}
            </Box>
            {/* {loading && !loadingEditTask ? (
                <Box className={classes.spinner}>
                    <Spinner one={false} />
                </Box>
            ) : showLog ? (
                <>
                    <TaskLog setLoading={setLoading} setLoadingEditTask={setLoadingEditTask} />
                    <div className={classes.seeMore}>
                        <Link
                            className={classes.link}
                            color="primary"
                            onClick={() => dispatch({ type: Logs.setShowLog, payload: false })}
                        >
                            See more tasks
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <CurrentTasks setLoading={setLoading} setLoadingEditTask={setLoadingEditTask} />
                    {!showForm && !showCompleted && (
                        <Box display="flex" justifyContent="flex-end" className={classes.seeMore}>
                            <Fade in={!showForm} timeout={500} enter>
                                <Fab
                                    color="primary"
                                    size="small"
                                    onClick={() => dispatch({ type: Tasks.setShowForm, payload: true })}
                                >
                                    <AddIcon />
                                </Fab>
                            </Fade>
                        </Box>
                    )}
                </>
            )} */}
            <IncompleteTasksTable />
        </React.Fragment>
    );
};

export default TasksComponent;
