import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/slices/modals/modalsSlice';
import { IButtonProps } from '../types';
import { Delete as DeleteIcon } from '@material-ui/icons';

const Delete: React.FC<IButtonProps> = ({ taskId }): JSX.Element => {
    const dispatch = useDispatch();
    const { dlt, button } = useButtonStyles();
    const header = 'Are you sure you want to delete?';
    return (
        <div
            className={clsx(dlt, button)}
            onClick={() => dispatch(setModal({ id: taskId, header, command: 'delete' }))}
        >
            <span>Delete</span>
            <DeleteIcon />
        </div>
    );
};

export default Delete;
