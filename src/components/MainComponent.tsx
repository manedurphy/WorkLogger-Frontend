import React from 'react';
import clsx from 'clsx';
// import Chart from './Chart';
// import Breadcrumbs from './Breadcrumbs';
// import CurrentWeek from './CurrentWeek';
// import TasksComponent from './Tasks';
// import SnackBarComponent from './UI/SnackBar';
// import LogForm from './Forms/LogForm';
// import JobForm from './Forms/JobForm';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
// import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
    },
    fixedHeight: {
        height: 240,
    },
    overlap: {
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
    },
}));

const Main: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.overlap);
    // const { state } = useContext(GlobalContext);
    return (
        <Container maxWidth="lg" className={classes.container}>
            {/* <Breadcrumbs /> */}
            <Grid container spacing={3}>
                <Grid item xs={12} lg={7}>
                    <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
                </Grid>

                <Grid item xs={12} lg={5}>
                    <Paper className={fixedHeightPaper}>{/* <CurrentWeek /> */}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/* <TasksComponent showCompleted={state.tasks.showCompleted} /> */}
                    </Paper>
                </Grid>
            </Grid>
            {/* {state.log.showLog && <LogForm />}
            {!state.log.showLog && !state.tasks.showCompleted && <JobForm />}
            {state.alerts.map((alert, i) => (
                <SnackBarComponent
                    key={i}
                    message={alert.message}
                    type={alert.type}
                    anchor={{ vertical: 'bottom', horizontal: 'center' }}
                />
            ))} */}
        </Container>
    );
};

export default Main;
