import React from 'react';
import clsx from 'clsx';
import useButtonStyles from './buttonStyles';
import { LibraryBooks } from '@material-ui/icons';
import { setCurrentAndShowLog } from '../../../redux/slices/tasks/tasksSlice';
import { LogButtonProps } from './types';
import { useDispatch } from 'react-redux';

const Log: React.FC<LogButtonProps> = ({ taskId, tasks }) => {
    const dispatch = useDispatch();
    // const { incompletedTasks } = useSelector(getTasksState);
    const { log, button } = useButtonStyles();
    return (
        <div className={clsx(log, button)} onClick={() => dispatch(setCurrentAndShowLog(taskId, tasks))}>
            <span>See Log</span>
            <LibraryBooks />
        </div>
    );
};

export default Log;
