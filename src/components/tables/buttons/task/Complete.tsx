import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { IButtonProps } from '../types';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/slices/modals/modalsSlice';

const Complete: React.FC<IButtonProps> = ({ taskId }): JSX.Element => {
    const dispatch = useDispatch();
    const { complete, button } = useButtonStyles();
    const header = 'Ready to complete this task?';

    return (
        <div
            className={clsx(complete, button)}
            onClick={() => dispatch(setModal({ id: taskId, header, command: 'complete' }))}
        >
            <span>Complete</span>
            <CheckCircleOutlineIcon />
        </div>
    );
};

export default Complete;
