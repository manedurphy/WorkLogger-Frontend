import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
    },
    fixedHeight: {
        height: 240,
    },
    overlap: {
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
