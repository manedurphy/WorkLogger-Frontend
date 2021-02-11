import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { IRowProps } from '../../../types';

const DropDownBody: React.FC<IRowProps> = ({ row }): JSX.Element => (
    <TableBody>
        <TableRow>
            <TableCell>{row.hoursRequiredByBim}</TableCell>
            <TableCell>{row.reviewHours}</TableCell>
            <TableCell>{row.hoursRemaining}</TableCell>
            <TableCell>{row.dueDate.toString().slice(0, 10)}</TableCell>
            <TableCell>{row.notes}</TableCell>
        </TableRow>
    </TableBody>
);

export default DropDownBody;
