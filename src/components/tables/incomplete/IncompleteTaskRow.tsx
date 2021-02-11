/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TaskInfo from './components/content/TaskInfo';
import IncompleteTaskDropDown from './components/dropdown/IncompleteTaskDropDown';
import { IRowProps } from './types';

const IncompleteTaskRow: React.FC<IRowProps> = ({ row }): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TaskInfo open={open} row={row} setOpen={setOpen} />
            <IncompleteTaskDropDown row={row} open={open} />
        </React.Fragment>
    );
};

export default IncompleteTaskRow;
