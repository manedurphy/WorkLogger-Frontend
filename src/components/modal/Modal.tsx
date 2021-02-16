/* eslint-disable react/prop-types */
import React from 'react';
import CancelButton from './buttons/Cancel';
import ConfirmButton from './buttons/Confirm';
import { actions } from './actions';
import useModalStyles from './styles';
import { useSelector } from 'react-redux';
import { Box, Fade, Modal } from '@material-ui/core';
import { getModalState } from '../../redux/slices/modals/modalsSlice';

const ConfirmModal = (): JSX.Element => {
    const { modal, paper, headerStyle, btnContainer } = useModalStyles();
    const { show, header, command } = useSelector(getModalState);
    return (
        <Modal open={show} className={modal}>
            <Fade in={show}>
                <div className={paper}>
                    <h2 className={headerStyle}>{header}</h2>
                    <Box className={btnContainer}>
                        <ConfirmButton action={actions[command]} />
                        <CancelButton />
                    </Box>
                </div>
            </Fade>
        </Modal>
    );
};

export default ConfirmModal;
