/* eslint-disable react/prop-types */
import React from 'react';
import DrawerListItem from './DrawerListItem';
import useDrawerStyles from './drawerStyles';
import drawerListItems from './drawerListItems';
import { List } from '@material-ui/core';
import { IDrawerListItem } from './types';

const DrawerList: React.FC = (): JSX.Element => {
    const classes = useDrawerStyles();

    return (
        <List className={classes.list}>
            {drawerListItems.map((item: IDrawerListItem) => (
                <DrawerListItem key={item.title} Icon={item.Icon} title={item.title} />
            ))}
        </List>
    );
};

export default DrawerList;
