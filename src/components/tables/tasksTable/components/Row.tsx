import React, { useState, Fragment } from 'react';
import useTaskTableStyles from '../styles';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';
import { RowProps } from '../types';

const Row: React.FC<RowProps> = ({ task, Dropdown }) => {
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
            <Dropdown task={task} open={open} />
        </Fragment>
    );
};

export default Row;
