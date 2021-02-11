import React from 'react';
import clsx from 'clsx';
import useButtonStyles from './buttonStyles';
import { Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { findAndSetCurrentTask } from '../../../../redux/slices/tasks/tasksSlice';
import { IEditProps } from './types';

const Edit: React.FC<IEditProps> = ({ taskId, incompletedTasks }): JSX.Element => {
    const dispatch = useDispatch();
    const { edit, button } = useButtonStyles();
    return (
        <div className={clsx(edit, button)} onClick={() => dispatch(findAndSetCurrentTask(taskId, incompletedTasks))}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
