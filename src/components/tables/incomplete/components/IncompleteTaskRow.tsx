/* eslint-disable react/prop-types */
import React, { useState, Fragment } from 'react';
import TaskRowBody from './content/TaskRowBody';
import IncompleteTaskDropDown from './dropdown/IncompleteTaskDropDown';
import { IRowProps } from '../types';

const IncompleteTaskRow: React.FC<IRowProps> = ({ row }): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TaskRowBody open={open} row={row} setOpen={setOpen} />
            <IncompleteTaskDropDown row={row} open={open} />
        </Fragment>
    );
};

export default IncompleteTaskRow;
