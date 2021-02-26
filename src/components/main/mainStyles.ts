import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export default makeStyles((theme: Theme) => ({
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
        alignItems: 'center',
    },
}));
