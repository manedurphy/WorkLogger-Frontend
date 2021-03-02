/* eslint-disable react/prop-types */
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TotalProps } from './types';

const Total: React.FC<TotalProps> = ({ total }): JSX.Element => {
    console.log(total);
    return (
        <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{total[2].toFixed(2)}</TableCell>
            <TableCell>{total[3].toFixed(2)}</TableCell>
            <TableCell>{total[4].toFixed(2)}</TableCell>
            <TableCell>{total[5].toFixed(2)}</TableCell>
            <TableCell>{total[6].toFixed(2)}</TableCell>
        </TableRow>
    );
};

export default Total;
