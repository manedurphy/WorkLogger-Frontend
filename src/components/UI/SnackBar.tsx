/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackBarProps } from './types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const SnackBar: React.FC<SnackBarProps> = (props): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClose = (_e?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={props.anchor}>
                <Alert onClose={handleClose} severity={props.type}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default SnackBar;
