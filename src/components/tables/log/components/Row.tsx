import React, { useState, Fragment } from 'react';
import Dropdown from './Dropdown';
import useLogTableStyles from '../styles';
import { LogItemProps } from '../types';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

const Row: React.FC<LogItemProps> = ({ logItem }): JSX.Element => {
    const { root } = useLogTableStyles();
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <TableRow className={root}>
                <TableCell>
                    <IconButton aria-label={'expand row'} size={'small'} onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{logItem.loggedAt.toString().slice(0, 10)}</TableCell>
                <TableCell>{logItem.name}</TableCell>
                <TableCell>{logItem.projectNumber}</TableCell>
                <TableCell>{logItem.hoursAvailableToWork}</TableCell>
                <TableCell>{logItem.hoursWorked}</TableCell>
                <TableCell>{logItem.productiveHours}</TableCell>
                <TableCell>{logItem.numberOfReviews}</TableCell>
            </TableRow>
            <Dropdown logItem={logItem} open={open} />
        </Fragment>
    );
};

export default Row;
