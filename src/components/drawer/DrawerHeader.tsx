import React from 'react';
import useDrawerStyles from './drawerStyles';

const DrawerHeader = (): JSX.Element => {
    const classes = useDrawerStyles();
    return (
        <div className={classes.header}>
            <h2>Work Logger</h2>
        </div>
    );
};

export default DrawerHeader;
