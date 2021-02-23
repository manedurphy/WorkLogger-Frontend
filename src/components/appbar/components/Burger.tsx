import React from 'react';
import useAppBarStyles from '../appbarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
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
