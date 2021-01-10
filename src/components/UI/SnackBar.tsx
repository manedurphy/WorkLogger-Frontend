import React, { useState } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar, SnackbarOrigin } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

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

const SnackBar: React.FC<{
    message: string;
    type: 'error' | 'success' | 'info' | 'warning' | undefined;
    anchor: SnackbarOrigin;
}> = (props) => {
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
