import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const DropDownHead = () => (
    <TableHead>
        <TableRow>
            <TableCell>Hours for BIM</TableCell>
            <TableCell>Review Hours</TableCell>
            <TableCell>Hours Remaining</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Notes</TableCell>
        </TableRow>
    </TableHead>
);

export default DropDownHead;
