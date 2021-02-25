import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Head = (): JSX.Element => (
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

export default Head;
