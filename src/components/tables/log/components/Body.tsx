import React, { useState } from 'react';
import Dropdown from './Dropdown';
import useLogTableStyles from '../styles';
import { IconButton, TableBody, TableCell, TableRow } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';
import { LogItemProps } from '../types';

const Body: React.FC<LogItemProps> = ({ logItem }): JSX.Element => {
    const [open, setOpen] = useState(false);
    const { root } = useLogTableStyles();
    return (
        <TableBody className={'action-cell'}>
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
                <TableCell>{logItem.numberOfReviews}</TableCell>
            </TableRow>
            <Dropdown logItem={logItem} open={open} />
        </TableBody>
    );
};

export default Body;
