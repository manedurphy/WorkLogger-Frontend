import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { setAddHoursModal } from '../../../../redux/slices/modals/modalsSlice';
import { IButtonProps } from '../types';

const Log: React.FC<IButtonProps> = ({ taskId }): JSX.Element => {
    const dispatch = useDispatch();
    const { addbtn, button } = useButtonStyles();
    return (
        <div className={clsx(addbtn, button)} onClick={() => dispatch(setAddHoursModal(taskId))}>
            <span>Add Hours</span>
            <AddIcon />
        </div>
    );
};

export default Log;
