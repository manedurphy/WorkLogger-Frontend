import { makeStyles } from '@material-ui/core';

export default makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    link: {
        marginTop: '15px',
        cursor: 'pointer',
    },
});
