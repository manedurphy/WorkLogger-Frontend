import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
