import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { ITableProps } from '../../types';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

const TaskInfo: React.FC<ITableProps> = ({ row, open, setOpen }): JSX.Element => {
    const { root } = useStyles();
    return (
        <TableRow className={root}>
            <TableCell>
                <IconButton aria-label={'expand row'} size={'small'} onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell>{row.dateAssigned.toString().slice(0, 10)}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.projectNumber}</TableCell>
            <TableCell>{row.hoursAvailableToWork}</TableCell>
            <TableCell>{row.hoursWorked}</TableCell>
            <TableCell>{row.numberOfReviews}</TableCell>
        </TableRow>
    );
};

export default TaskInfo;
