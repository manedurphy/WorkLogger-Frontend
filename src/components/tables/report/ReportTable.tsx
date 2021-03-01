import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import { getReportState } from '../../../redux/slices/report/reportSlice';

interface Day {
    [key: number]: string;
}

const days: Day = {
    1: 'sunday',
    2: 'monday',
    3: 'tuesday',
    4: 'wednesday',
    5: 'thursday',
    6: 'friday',
    7: 'saturday',
};

interface Column {
    id:
        | 'projectNumber'
        | 'monday'
        | 'tuesday'
        | 'wednesday'
        | 'thursday'
        | 'friday';
    label: string;
    minWidth?: number;
    align?: 'center' | 'right' | 'left';
}

const columns: Column[] = [
    { id: 'projectNumber', label: 'Job #', minWidth: 100, align: 'left' },
    { id: 'monday', label: 'Monday', minWidth: 100, align: 'center' },
    {
        id: 'tuesday',
        label: 'Tuesday',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'wednesday',
        label: 'Wednesday',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'thursday',
        label: 'Thursday',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'friday',
        label: 'Friday',
        minWidth: 100,
        align: 'center',
    },
];

// interface Data {
//     projectNumber: number;
//     day: number;
//     hours: number;
// }

// function createData(projectNumber: number, day: number, hours: number): Data {
//     return { projectNumber, day, hours };
// }

// const rows = [
//     createData(2, 2, 5.4),
//     createData(1, 2, 6.8),
//     createData(3, 4, 12.2),
// ];

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '12px',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable(): JSX.Element {
    const classes = useStyles();
    const { report } = useSelector(getReportState);
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChangePage = (_event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement>,
    // ) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {report.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role={'checkbox'}
                                    tabIndex={-1}
                                    key={row.projectNumber}
                                >
                                    {columns.map((col) => {
                                        return col.id === 'projectNumber' ? (
                                            <TableCell
                                                key={col.id}
                                                align={col.align}
                                            >
                                                {row.projectNumber}
                                            </TableCell>
                                        ) : (
                                            <TableCell
                                                key={col.id}
                                                align={col.align}
                                            >
                                                {col.id === days[row.day]
                                                    ? row.hours
                                                    : 0}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                        {/* {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
        </Paper>
    );
}
