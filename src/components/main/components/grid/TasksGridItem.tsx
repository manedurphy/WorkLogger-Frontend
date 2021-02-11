import React from 'react';
import TasksComponent from '../TasksComponent';
import useMainStyles from '../../mainStyles';
import { Grid, Paper } from '@material-ui/core';

const TasksGridItem = () => {
    const { paper } = useMainStyles();
    return (
        <Grid item xs={12}>
            <Paper className={paper}>
                <TasksComponent />
            </Paper>
        </Grid>
    );
};

export default TasksGridItem;
