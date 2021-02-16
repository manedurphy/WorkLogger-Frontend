import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../../redux/slices/modals/modalsSlice';

const Cancel = (): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Button variant={'contained'} onClick={() => dispatch(setShowModal(false))}>
            Cancel
        </Button>
    );
};

export default Cancel;
