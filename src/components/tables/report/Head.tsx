import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useReportStyles from './styles';
import { Column } from './types';

const columns: Column[] = [
    { id: 'projectNumber', label: 'Job #', minWidth: 100, align: 'left' },
    { id: 'monday', label: 'Monday', minWidth: 100, align: 'left' },
    {
        id: 'tuesday',
        label: 'Tuesday',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'wednesday',
        label: 'Wednesday',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'thursday',
        label: 'Thursday',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'friday',
        label: 'Friday',
        minWidth: 100,
        align: 'left',
    },
];

const Head = (): JSX.Element => {
    const { header } = useReportStyles();
    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        className={header}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default Head;
