import React, { useState, Fragment } from 'react';
import Dropdown from './Dropdown';
import useLogTableStyles from '../styles';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { LogItemProps } from '../types';

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
