import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import useModalStyles from '../styles';

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
