import React from 'react';
import IncompleteTasks from '../components/IncompleteTasks';
import useMainStyles from '../mainStyles';
import { Paper } from '@material-ui/core';

const IncompleteTasksGridItem = (): JSX.Element => {
    const { paper } = useMainStyles();
    return (
        // <Grid item xs={12}>
        <Paper className={paper}>
            <IncompleteTasks />
        </Paper>
        // </Grid>
    );
};

export default IncompleteTasksGridItem;
