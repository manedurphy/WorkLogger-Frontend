import React from 'react';
import { IFixedHeightPaper } from '../../types';
import { Grid, Paper } from '@material-ui/core';

const ChartGridItem: React.FC<IFixedHeightPaper> = ({ fixedHeightPaper }): JSX.Element => {
    return (
        <Grid item xs={12} lg={7}>
            <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
        </Grid>
    );
};

export default ChartGridItem;
