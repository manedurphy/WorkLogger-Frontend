import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        borderRadius: '1rem',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
    },
    headerStyle: {
        marginBottom: '8px',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    delBtn: {
        backgroundColor: '#b60000',
        color: '#ffffff',

        '&:hover': {
            backgroundColor: '#b60000',
        },
    },
    completeBtn: {
        backgroundColor: 'green',
        color: '#ffffff',

        '&:hover': {
            backgroundColor: 'green',
        },
    },
}));