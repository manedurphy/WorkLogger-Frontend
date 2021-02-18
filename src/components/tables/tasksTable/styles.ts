import { makeStyles } from '@material-ui/core';

export default makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    add: {
        marginTop: '15px',
        color: '#3f51b5',
        height: '36px',
        width: '36px',
        '&:hover': {
            cursor: 'pointer',
            color: '#293785',
        },
    },
    flexSpace: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
});
