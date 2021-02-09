/* eslint-disable react/prop-types */
import React from 'react';
import { Assignment as AssignmentIcon, DataUsage as DataUsageIcon } from '@material-ui/icons';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getDrawerState } from '../redux/slices/drawer/drawerSlice';

const useStyles = makeStyles((_theme) => ({
    drawerPaper: {
        width: 240,
    },
}));

interface IDrawerProps {
    setLoadingTasks: (value: React.SetStateAction<boolean>) => void;
    showCompleted: boolean;
}

const DrawerComponent: React.FC<IDrawerProps> = (props): JSX.Element => {
    const classes = useStyles();
    const { open } = useSelector(getDrawerState);

    return (
        <Drawer
            elevation={5}
            classes={{
                paper: classes.drawerPaper,
            }}
            open={open}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px 0',
                    fontFamily: 'Fjalla One, sans-serif',
                }}
            >
                <h2 style={{ marginLeft: '3px' }}>Work Logger</h2>
            </div>
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={() => {
                        if (props.showCompleted) {
                            props.setLoadingTasks(true);

                            // dispatch({ type: Tasks.setShowCompleted, payload: false });
                        }
                    }}
                >
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Current Tasks" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        if (!props.showCompleted) {
                            props.setLoadingTasks(true);
                            // dispatch({ type: Tasks.setShowCompleted, payload: true });
                        }
                    }}
                >
                    <ListItemIcon>
                        <DataUsageIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Archive'} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerComponent;
