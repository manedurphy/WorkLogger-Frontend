import { SnackbarOrigin } from '@material-ui/core/Snackbar/Snackbar';
export interface SnackBarProps {
    message: string;
    type: 'error' | 'success' | 'info' | 'warning' | undefined;
    anchor: SnackbarOrigin;
}
