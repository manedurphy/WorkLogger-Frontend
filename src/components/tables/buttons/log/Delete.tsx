import React from 'react';
import DeleteButton from '../common/Delete';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/slices/modals/modalsSlice';
import { LogDeleteButtonProps } from '../types';

const Delete: React.FC<LogDeleteButtonProps> = ({ logId }): JSX.Element => {
    const dispatch = useDispatch();
    const header = 'Are you sure you want to delete?';

    return <DeleteButton handleClick={() => dispatch(setModal({ id: logId, header, command: 'deleteLogItem' }))} />;
};

export default Delete;
