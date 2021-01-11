import React, { useState, useEffect } from 'react';
import AppBarComponent from './AppBarComponent';
// import MainComponent from './Main';
import DrawerComponent from './DrawerComponent';
import { useDispatch, useSelector } from 'react-redux';
// import Spinner from './UI/Spinner';
// import { AxiosResponse } from 'axios';
// import { Redirect } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalState';
// import { Users, Tasks, Logs, Alerts, Productivities, Hours } from '../enums';
// import { VerifyType } from '../global/types/type';
import { makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../redux/slices/auth/authSlice';
import { handleGetIncompleteTasks } from '../redux/slices/tasks/tasksSlice';
// import { getHoursWorked, getProductivityData, getTasks, verifyUser } from '../global/functions/axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
    spinner: {
        marginTop: '200px',
        position: 'relative',
        zIndex: theme.zIndex.drawer + 5,
    },
    mainBackground: {
        backgroundColor: '#F7F5FA',
        height: '100%',
        top: 250,
        left: 240,
        bottom: 0,
        right: 0,
        width: `calc(100% - ${240}px)`,
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
    },
    test: {
        backgroundColor: '#F7F5FA',
    },
}));

const Dashboard: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { loginSuccess } = useSelector(getAuthState);
    const [open, setOpen] = useState(true);
    const [loadingTasks, setLoadingTasks] = useState(true);
    // const { state, dispatch } = useContext(GlobalContext);
    // const { showCompleted } = state.tasks;
    console.log(loadingTasks);

    useEffect(() => {
        dispatch(handleGetIncompleteTasks());
    }, []);

    // useEffect((): void => {
    //     (async (): Promise<void> => {
    //         try {
    //             const res: AxiosResponse<VerifyType> = await verifyUser();
    //             dispatch({ type: Users.setUser, payload: res.data.user });
    //             dispatch({ type: Logs.setShowLog, payload: false });
    //             dispatch({ type: Alerts.removeAlerts, payload: [] });
    //             dispatch({
    //                 type: Tasks.updateTasks,
    //                 payload: await getTasks(showCompleted),
    //             });
    //             dispatch({
    //                 type: Productivities.setProductivity,
    //                 payload: await getProductivityData(),
    //             });
    //             dispatch({
    //                 type: Hours.setHours,
    //                 payload: await getHoursWorked(),
    //             });
    //             setLoadingTasks(false);
    //         } catch (error) {
    //             setIsLoggedIn(false);
    //         }
    //     })();
    // }, [showCompleted]);

    return (
        <React.Fragment>
            <div className={classes.mainBackground}></div>
            <div className={classes.root}>
                <AppBarComponent setOpen={setOpen} open={open} />
                <DrawerComponent
                    // showCompleted={showCompleted}
                    setLoadingTasks={setLoadingTasks}
                    showCompleted={false}
                    open={open}
                    setOpen={setOpen}
                />
                {/* <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {loadingTasks ? (
                        <Box className={classes.spinner}>
                            <Spinner one={true} />
                        </Box>
                    ) : (
                        <Box className={classes.test}>
                            <MainComponent />
                        </Box>
                    )}
                </main> */}
            </div>
            {!loginSuccess && <Redirect to={'/login'} />}
        </React.Fragment>
    );
};

export default Dashboard;
