/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import CancelButton from './buttons/Cancel';
import ConfirmButton from './buttons/Confirm';
import ModalContainer from './common/ModalContainer';
import useModalStyles from './styles';
import { actions } from './actions';
import { useSelector } from 'react-redux';
import { getModalState } from '../../redux/slices/modals/modalsSlice';

const ConfirmModal = (): JSX.Element => {
    const { btnContainer } = useModalStyles();
    const { command, header, show } = useSelector(getModalState);
    return (
        <ModalContainer header={header} show={show}>
            <Box className={btnContainer}>
                <ConfirmButton action={actions[command]} />
                <CancelButton />
            </Box>
        </ModalContainer>
    );
};

export default ConfirmModal;
