import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const IncompleteTasksTableHead = () => (
    <TableHead>
        <TableRow>
            <TableCell />
            <TableCell>Assigned On</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Project Number</TableCell>
            <TableCell>Hours Permitted</TableCell>
            <TableCell>Hours Worked</TableCell>
            <TableCell>No. Reviews</TableCell>
        </TableRow>
    </TableHead>
);

export default IncompleteTasksTableHead;
