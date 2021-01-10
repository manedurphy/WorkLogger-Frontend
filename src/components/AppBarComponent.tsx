/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import SearchBar from './SearchBar';
import LogoutMenu from './LogoutMenu';
import UseWindow from './UseWindow';
import { Menu as MenuIcon } from '@material-ui/icons';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'black',
        height: '250px',
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

const AppBarComponent: React.FC<{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}> = (props): JSX.Element => {
    const classes = useStyles();
    const size = UseWindow();

    const handleDrawerOpen = () => {
        props.setOpen(true);
    };

    return (
        <AppBar position="absolute" elevation={0} className={clsx(classes.appBar, props.open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                {size.width >= 600 && (
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                )}
                <SearchBar />
                <LogoutMenu />
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
