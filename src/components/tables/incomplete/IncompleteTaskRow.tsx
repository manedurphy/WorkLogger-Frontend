/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import IncompleteTaskDropDown from './IncompleteTaskDropDown';
import { ITask } from '../../../redux/slices/tasks/types';
import { TableRow, TableCell, IconButton, makeStyles } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const IncompleteTaskRow: React.FC<{
    row: ITask;
}> = (props): JSX.Element => {
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{props.row.dateAssigned.toString().slice(0, 10)}</TableCell>
                <TableCell>{props.row.name}</TableCell>
                <TableCell>{props.row.projectNumber}</TableCell>
                <TableCell>{props.row.hoursAvailableToWork}</TableCell>
                <TableCell>{props.row.hoursWorked}</TableCell>
                <TableCell>{props.row.numberOfReviews}</TableCell>
            </TableRow>
            <IncompleteTaskDropDown row={props.row} open={open} />
        </React.Fragment>
    );
};

export default IncompleteTaskRow;
