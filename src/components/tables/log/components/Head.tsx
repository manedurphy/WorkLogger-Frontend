import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const Head = (): JSX.Element => (
    <TableHead>
        <TableRow>
            <TableCell />
            <TableCell>Logged On</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Project Number</TableCell>
            <TableCell>Hours Permitted</TableCell>
            <TableCell>Hours Worked</TableCell>
            <TableCell>Productivity</TableCell>
            <TableCell>No. Reviews</TableCell>
        </TableRow>
    </TableHead>
);

export default Head;
