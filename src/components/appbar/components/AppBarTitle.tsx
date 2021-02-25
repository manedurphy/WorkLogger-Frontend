import React from 'react';
import useAppBarStyles from '../appbarStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const AppBarTitle = (): JSX.Element | null => {
    const lg = useMediaQuery('(min-width: 768px)');
    const { title } = useAppBarStyles();
    const { showCompleted } = useSelector(getTasksState);

    return lg ? (
        <Typography component={'h1'} variant={'h6'} color={'inherit'} noWrap className={title}>
            {showCompleted ? 'Archive' : 'Dashboard'}
        </Typography>
    ) : null;
};

export default AppBarTitle;
