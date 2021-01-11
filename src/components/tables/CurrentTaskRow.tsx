/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import TaskDropDown from './TaskDropDown';
import { TableRow, TableCell, IconButton, makeStyles } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';
import { ITask } from '../../redux/slices/tasks/types';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const CurrentTaskRow: React.FC<{
    row: ITask;
}> = (props): JSX.Element => {
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <>
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
            {/* <TaskDropDown
                row={props.row}
                open={open}
                setLoading={props.setLoading}
                setLoadingEditTask={props.setLoadingEditTask}
            /> */}
        </>
    );
};

export default CurrentTaskRow;
