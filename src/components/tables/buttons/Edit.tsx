import React from 'react';
import clsx from 'clsx';
import useButtonStyles from './buttonStyles';
import { Edit as EditIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAndEdit, getTasksState } from '../../../redux/slices/tasks/tasksSlice';
import { IButtonProps } from './types';

const Edit: React.FC<IButtonProps> = ({ taskId }): JSX.Element => {
    const dispatch = useDispatch();
    const { incompletedTasks } = useSelector(getTasksState);
    const { edit, button } = useButtonStyles();

    return (
        <div className={clsx(edit, button)} onClick={() => dispatch(setCurrentAndEdit(taskId, incompletedTasks))}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
