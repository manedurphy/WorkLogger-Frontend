import React from 'react';
import TasksGridItem from './components/grid/TasksGridItem';
import useMainStyles from './mainStyles';
// import clsx from 'clsx';
// import { useSelector } from 'react-redux';
// import Chart from './Chart';
// import Breadcrumbs from './Breadcrumbs';
// import CurrentWeek from './CurrentWeek';
// import SnackBarComponent from './UI/SnackBar';
// import LogForm from './Forms/LogForm';
// import JobForm from './Forms/JobForm';
import { Container, Grid } from '@material-ui/core';
// import { getTasksState } from '../redux/slices/tasks/tasksSlice';
// import { GlobalContext } from '../context/GlobalState';

const Main: React.FC = (): JSX.Element => {
    const { container } = useMainStyles();
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.overlap);
    // const { state } = useContext(GlobalContext);
    return (
        <Container maxWidth={'lg'} className={container}>
            {/* <Breadcrumbs /> */}
            <Grid container spacing={3}>
                <TasksGridItem />
            </Grid>
        </Container>
    );
};

export default Main;
