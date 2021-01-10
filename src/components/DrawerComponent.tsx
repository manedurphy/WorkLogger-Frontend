/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import clsx from 'clsx';
// import logo from '../assets/acco.jpeg';
// import { GlobalContext } from '../context/GlobalState';
// import { Tasks } from '../enums';
// import UseWindow from './UseWindow';
import { Assignment as AssignmentIcon, DataUsage as DataUsageIcon } from '@material-ui/icons';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        border: 'none',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const DrawerComponent: React.FC<{
    setLoadingTasks: (value: React.SetStateAction<boolean>) => void;
    showCompleted: boolean;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props): JSX.Element => {
    const classes = useStyles();
    // const size = UseWindow();
    // const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        if (window.innerWidth <= 960) {
            props.setOpen(false);
        } else if (window.innerWidth > 960) {
            props.setOpen(true);
        }
    }, [window.innerWidth]);

    return (
        <Drawer
            variant="permanent"
            elevation={5}
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={window.innerWidth > 960 ? true : false}
        >
            <div
                className=""
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px 0',
                    fontFamily: 'Fjalla One, sans-serif',
                }}
            >
                {props.open && (
                    <React.Fragment>
                        {/* <img src={logo} style={{ width: '25px', height: '25px' }} /> */}
                        <h2 style={{ marginLeft: '3px' }}>Work Logger</h2>
                    </React.Fragment>
                )}
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
                    <ListItemText primary="Archive" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerComponent;
