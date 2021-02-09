import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { IDrawerListItem } from './types';

const DrawerListItem: React.FC<IDrawerListItem> = ({ Icon, title }): JSX.Element => (
    <ListItem button>
        <ListItemIcon>{<Icon />}</ListItemIcon>
        <ListItemText primary={title} />
    </ListItem>
);

export default DrawerListItem;
