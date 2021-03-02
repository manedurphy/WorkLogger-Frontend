import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useSelector } from 'react-redux';
import { getReportState } from '../../../redux/slices/report/reportSlice';

const Body = (): JSX.Element => {
    const { report } = useSelector(getReportState);
    return (
        <TableBody>
            {Object.keys(report).map((col) => (
                <TableRow role={'checkbox'} key={col}>
                    <TableCell>{col}</TableCell>
                    {report[col].map(
                        (record, i) =>
                            record.day < 7 && record.day > 1 && <TableCell key={i}>{record.hours}</TableCell>,
                    )}
                </TableRow>
            ))}
        </TableBody>
    );
};

export default Body;
