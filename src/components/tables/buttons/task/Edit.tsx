import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import { Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setCurrentTaskAndEdit } from '../../../../redux/slices/tasks/tasksSlice';
import { EditTaskButtonProps } from '../types';

const Edit: React.FC<EditTaskButtonProps> = ({ task }): JSX.Element => {
    const dispatch = useDispatch();
    const { edit, button } = useButtonStyles();

    return (
        <div className={clsx(edit, button)} onClick={() => dispatch(setCurrentTaskAndEdit(task))}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
