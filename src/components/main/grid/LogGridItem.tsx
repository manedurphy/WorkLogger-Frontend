import React from 'react';
import LogsComponent from '../components/LogComponent';
import useMainStyles from '../mainStyles';
import { Grid, Paper } from '@material-ui/core';

const LogGridItem = () => {
    const { paper } = useMainStyles();
    return (
        <Grid item xs={12}>
            <Paper className={paper}>
                <LogsComponent />
            </Paper>
        </Grid>
    );
};

export default LogGridItem;
