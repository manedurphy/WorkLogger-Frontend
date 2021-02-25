import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { LogButtonProps } from '../types';
import { useDispatch } from 'react-redux';
import { setLog } from '../../../../redux/slices/log/logSlice';

const Log: React.FC<LogButtonProps> = ({ log }): JSX.Element => {
    const dispatch = useDispatch();
    const { logBtn, button } = useButtonStyles();
    return (
        <div className={clsx(logBtn, button)} onClick={() => dispatch(setLog(log))}>
            <span>See Log</span>
            <LibraryBooks />
        </div>
    );
};

export default Log;
