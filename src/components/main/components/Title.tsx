import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 600,
        opacity: '0.85',
    },
}));

const Title: React.FC = ({ children }): JSX.Element => {
    const classes = useStyles();
    return (
        <Typography component={'h2'} variant={'h6'} className={classes.root}>
            {children}
        </Typography>
    );
};

export default Title;
