/* eslint-disable react/prop-types */
import React, { useState, Fragment } from 'react';
import useTaskTableStyles from '../styles';
import IncompleteTaskDropDown from './dropdown/IncompleteTaskDropDown';
import { IRowProps } from '../types';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

const IncompleteTaskRow: React.FC<IRowProps> = ({ task }): JSX.Element => {
    const [open, setOpen] = useState(false);
    const { root } = useTaskTableStyles();

    return (
        <Fragment>
            <TableRow className={root}>
                <TableCell>
                    <IconButton aria-label={'expand row'} size={'small'} onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{task.dateAssigned.toString().slice(0, 10)}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.projectNumber}</TableCell>
                <TableCell>{task.hoursAvailableToWork}</TableCell>
                <TableCell>{task.hoursWorked}</TableCell>
                <TableCell>{task.numberOfReviews}</TableCell>
            </TableRow>
            <IncompleteTaskDropDown task={task} open={open} />
        </Fragment>
    );
};

export default IncompleteTaskRow;
