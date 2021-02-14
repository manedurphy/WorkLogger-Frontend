/* eslint-disable react/prop-types */
import React from 'react';
import DrawerList from './DrawerList';
import DrawerHeader from './DrawerHeader';
import { Divider, Drawer } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getDrawerState, setDrawer } from '../../redux/slices/drawer/drawerSlice';

const DrawerComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const { open } = useSelector(getDrawerState);

    return (
        <Drawer elevation={5} open={open} onClose={() => dispatch(setDrawer(false))}>
            <DrawerHeader />
            <Divider />
            <DrawerList />
        </Drawer>
    );
};

export default DrawerComponent;
