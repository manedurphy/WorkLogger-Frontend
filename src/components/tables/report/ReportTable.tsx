import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Title from '../../main/components/Title';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getReportState } from '../../../redux/slices/report/reportSlice';

interface Column {
    id: 'projectNumber' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
    label: string;
    minWidth?: number;
    align?: 'left';
}

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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '12px',
        padding: theme.spacing(2),
    },
    container: {
        maxHeight: 440,
    },
    header: {
        backgroundColor: '#ffffff',
    },
}));

export default function StickyHeadTable(): JSX.Element {
    const classes = useStyles();
    const { report } = useSelector(getReportState);

    return (
        <Paper className={classes.root}>
            <Title>Weekly Report</Title>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    className={classes.header}
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
                        {Object.keys(report).map((col) => {
                            return (
                                <TableRow role={'checkbox'} key={col}>
                                    <TableCell>{col}</TableCell>
                                    {report[col].map(
                                        (record, i) =>
                                            record.day < 7 &&
                                            record.day > 1 && <TableCell key={i}>{record.hours}</TableCell>,
                                    )}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
