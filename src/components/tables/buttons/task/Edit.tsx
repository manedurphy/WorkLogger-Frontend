import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import { Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setCurrentAndEdit } from '../../../../redux/slices/tasks/tasksSlice';
import { EditButtonProps } from '../types';

const Edit: React.FC<EditButtonProps> = ({ task }): JSX.Element => {
    const dispatch = useDispatch();
    const { edit, button } = useButtonStyles();

    return (
        <div className={clsx(edit, button)} onClick={() => dispatch(setCurrentAndEdit(task))}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
