import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { IFixedHeightPaper } from '../../types';

const CurrentWeekGridItem: React.FC<IFixedHeightPaper> = ({ fixedHeightPaper }): JSX.Element => {
    return (
        <Grid item xs={12} lg={5}>
            <Paper className={fixedHeightPaper}>{/* <CurrentWeek /> */}</Paper>
        </Grid>
    );
};

export default CurrentWeekGridItem;
