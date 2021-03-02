import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
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
    link: {
        marginTop: '15px',
        cursor: 'pointer',
    },
});
