import React from 'react';
import IncompleteTasks from '../components/IncompleteTasks';
import useMainStyles from '../mainStyles';
import { Grid, Paper } from '@material-ui/core';

const TasksGridItem = () => {
    const { paper } = useMainStyles();
    return (
        <Grid item xs={12}>
            <Paper className={paper}>
                <IncompleteTasks />
            </Paper>
        </Grid>
    );
};

export default TasksGridItem;
