import React from 'react';
import useAppBarStyles from '../appbarStyles';
import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../../../redux/slices/drawer/drawerSlice';

const Burger = (): JSX.Element => {
    const { menuButton } = useAppBarStyles();
    const dispatch = useDispatch();

    return (
        <IconButton
            edge={'start'}
            color={'inherit'}
            aria-label={'open drawer'}
            onClick={() => dispatch(setDrawer(true))}
            className={menuButton}
        >
            <MenuIcon />
        </IconButton>
    );
};
export default Burger;
