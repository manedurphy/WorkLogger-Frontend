import React from 'react';
import useAppBarStyles from '../appbarStyles';
import { Typography, useMediaQuery } from '@material-ui/core';

const AppBarTitle = () => {
    const lg = useMediaQuery('(min-width: 768px');
    const { title } = useAppBarStyles();

    return lg ? (
        <Typography component="h1" variant="h6" color="inherit" noWrap className={title}>
            Dashboard
        </Typography>
    ) : null;
};

export default AppBarTitle;
