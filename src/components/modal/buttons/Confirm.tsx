import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '../../../redux/slices/modals/modalsSlice';
import { ConfirmButtonProps } from '../types';

const Confirm: React.FC<ConfirmButtonProps> = ({ action }): JSX.Element => {
    const dispatch = useDispatch();
    const { id, command } = useSelector(getModalState);
    return (
        <Button variant={'contained'} color={'primary'} onClick={() => dispatch(action(id))}>
            Yes, {command}
        </Button>
    );
};

export default Confirm;
