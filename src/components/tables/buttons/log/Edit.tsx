import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import { Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { EditLogButtonProps } from '../types';
import { setLogItem } from '../../../../redux/slices/log/logSlice';

const Edit: React.FC<EditLogButtonProps> = ({ logItem }): JSX.Element => {
    const dispatch = useDispatch();
    const { edit, button } = useButtonStyles();

    return (
        <div className={clsx(edit, button)} onClick={() => dispatch(setLogItem(logItem))}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
