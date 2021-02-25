/* eslint-disable react/prop-types */
import React from 'react';
import AppBarTitle from './components/AppBarTitle';
import SearchBar from './components/SearchBar';
import LogoutMenu from './components/LogoutMenu';
import Burger from './components/Burger';
import useAppBarStyles from './appbarStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const AppBarComponent = (): JSX.Element => {
    const { appBar, toolbar } = useAppBarStyles();

    return (
        <AppBar position={'absolute'} style={{ backgroundColor: 'black' }} elevation={0} className={appBar}>
            <Toolbar className={toolbar}>
                <Burger />
                <AppBarTitle />
                <SearchBar />
                <LogoutMenu />
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
