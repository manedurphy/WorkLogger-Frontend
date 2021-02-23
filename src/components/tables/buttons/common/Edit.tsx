import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import EditIcon from '@material-ui/icons/Edit';
import { EditButtonProps } from '../types';

const Edit: React.FC<EditButtonProps> = ({ handleClick }): JSX.Element => {
    const { edit, button } = useButtonStyles();
    return (
        <div className={clsx(edit, button)} onClick={handleClick}>
            <span>Edit</span>
            <EditIcon />
        </div>
    );
};

export default Edit;
