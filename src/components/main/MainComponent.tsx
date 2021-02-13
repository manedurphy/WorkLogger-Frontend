import React from 'react';
import IncompleteGridItem from './grid/IncompleteGridItem';
import LogsGridItem from './grid/LogGridItem';
import TaskForm from '../forms/task/TaskForm';
import useMainStyles from './mainStyles';
import { Container, Grid } from '@material-ui/core';

const Main = (): JSX.Element => {
    const { container } = useMainStyles();
    return (
        <Container maxWidth={'lg'} className={container}>
            {/* <Breadcrumbs /> */}
            <Grid container spacing={3}>
                <IncompleteGridItem />
                <LogsGridItem />
                <TaskForm />
            </Grid>
        </Container>
    );
};

export default Main;
