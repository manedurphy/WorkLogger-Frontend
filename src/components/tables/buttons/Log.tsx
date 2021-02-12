import React from 'react';
import clsx from 'clsx';
import useButtonStyles from './buttonStyles';
import { LibraryBooks } from '@material-ui/icons';
import { setCurrentAndShowLog, getTasksState } from '../../../redux/slices/tasks/tasksSlice';
import { IButtonProps } from './types';
import { useDispatch, useSelector } from 'react-redux';

const Log: React.FC<IButtonProps> = ({ taskId }) => {
    const dispatch = useDispatch();
    const { incompletedTasks } = useSelector(getTasksState);
    const { log, button } = useButtonStyles();
    return (
        <div className={clsx(log, button)} onClick={() => dispatch(setCurrentAndShowLog(taskId, incompletedTasks))}>
            <span>See Log</span>
            <LibraryBooks />
        </div>
    );
};

export default Log;
