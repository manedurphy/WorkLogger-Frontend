import React, { useState, Fragment } from 'react';
import useTasksTableStyles from '../styles';
import Dropdown from './Dropdown';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { RowProps } from '../../types';

const Row: React.FC<RowProps> = ({ task, Actions }) => {
    const [open, setOpen] = useState(false);
    const { root } = useTasksTableStyles();
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
            <Dropdown task={task} open={open} Actions={Actions} />
        </Fragment>
    );
};

export default Row;
