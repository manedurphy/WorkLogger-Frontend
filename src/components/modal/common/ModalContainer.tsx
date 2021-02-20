import React from 'react';
import useModalStyles from '../styles';
import { Fade, Modal } from '@material-ui/core';

interface ModalContainerProps {
    children: JSX.Element;
    show: boolean;
    header: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, show, header }): JSX.Element => {
    const { paper, headerStyle, modal } = useModalStyles();
    return (
        <Modal open={show} className={modal}>
            <Fade in={show}>
                <div className={paper}>
                    <h2 className={headerStyle}>{header}</h2>
                    {children}
                </div>
            </Fade>
        </Modal>
    );
};

export default ModalContainer;
