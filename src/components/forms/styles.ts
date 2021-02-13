import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
    return {
        form: {
            padding: '10px 20px',
        },
        paper: {
            position: 'relative',
            zIndex: theme.zIndex.drawer + 5,
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.35rem',
        },
        submit: {
            display: 'flex',
            justifyContent: 'center',
        },
    };
});
