/* eslint-disable react/prop-types */
import React from 'react';
import DrawerListItem from './DrawerListItem';
import useDrawerStyles from './drawerStyles';
import drawerListItems from './drawerListItems';
import { List } from '@material-ui/core';
import { IDrawerListItem } from './types';

const DrawerList = (): JSX.Element => {
    const classes = useDrawerStyles();

    return (
        <List className={classes.list}>
            {drawerListItems.map((item: IDrawerListItem) => (
                <li key={item.title}>
                    <DrawerListItem Icon={item.Icon} title={item.title} redirectPath={item.redirectPath} />
                </li>
            ))}
        </List>
    );
};

export default DrawerList;
