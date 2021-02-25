import React from 'react';
import clsx from 'clsx';
import useButtonStyles from '../buttonStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteButtonProps } from '../types';

const Delete: React.FC<DeleteButtonProps> = ({ handleClick }): JSX.Element => {
    const { dlt, button } = useButtonStyles();
    return (
        <div className={clsx(dlt, button)} onClick={handleClick}>
            <span>Delete</span>
            <DeleteIcon />
        </div>
    );
};

export default Delete;
