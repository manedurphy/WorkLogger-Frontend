import React from 'react';
import useDrawerStyles from './drawerStyles';
import logo from '../../assets/work-logger-logo-min.png';

const DrawerHeader = (): JSX.Element => {
    const classes = useDrawerStyles();
    return (
        <div className={classes.header}>
            <h2>Work Logger</h2>
            <img src={logo} alt={'logo'} width={60.3} height={40} />
        </div>
    );
};

export default DrawerHeader;
