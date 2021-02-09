/* eslint-disable react/prop-types */
import React from 'react';
import SearchBar from './SearchBar';
import LogoutMenu from './LogoutMenu';
import { Menu as MenuIcon } from '@material-ui/icons';
import { AppBar, IconButton, makeStyles, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../redux/slices/drawer/drawerSlice';

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

const AppBarComponent: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 768px');
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch(setDrawer(true));
    };

    return (
        <AppBar position="absolute" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                {matches && (
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
