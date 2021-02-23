import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
    button: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.65rem',
        width: '105px',
        padding: '8px 0',
        justifyContent: 'space-evenly',
        marginBottom: '8px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    complete: {
        backgroundColor: 'green',
    },
    logBtn: {
        backgroundColor: 'purple',
    },
    edit: {
        backgroundColor: '#3f51b5',
    },
    dlt: {
        backgroundColor: '#b60000',
    },
    addbtn: {
        backgroundColor: '#6E1010',
        paddingLeft: '5px',
    },
});
