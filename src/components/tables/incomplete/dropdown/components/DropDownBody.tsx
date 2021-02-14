import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { IRowProps } from '../../types';

const DropDownBody: React.FC<IRowProps> = ({ task }): JSX.Element => (
    <TableBody>
        <TableRow>
            <TableCell>{task.hoursRequiredByBim}</TableCell>
            <TableCell>{task.reviewHours}</TableCell>
            <TableCell>{task.hoursRemaining}</TableCell>
            <TableCell>{task.dueDate.toString().slice(0, 10)}</TableCell>
            <TableCell>{task.notes}</TableCell>
        </TableRow>
    </TableBody>
);

export default DropDownBody;
