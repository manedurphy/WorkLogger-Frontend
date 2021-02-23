import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IDrawerListItem } from './types';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../../redux/slices/drawer/drawerSlice';

const DrawerListItem: React.FC<IDrawerListItem> = ({ Icon, title, redirectPath }): JSX.Element => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        setRedirect(true);
        dispatch(setDrawer(false));
    };

    return (
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
            {redirect && <Redirect to={redirectPath} />}
        </ListItem>
    );
};

export default DrawerListItem;
