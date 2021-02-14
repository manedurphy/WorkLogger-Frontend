import React from 'react';
import CompleteTasks from '../components/CompleteTasks';
import useMainStyles from '../mainStyles';
import { Container, Grid, Paper } from '@material-ui/core';

const CompleteTasksGridItem = (): JSX.Element => {
    const { paper, container } = useMainStyles();
    return (
        <Container maxWidth={'lg'} className={container}>
            {/* <Breadcrumbs /> */}
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={paper}>
                        <CompleteTasks />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CompleteTasksGridItem;
