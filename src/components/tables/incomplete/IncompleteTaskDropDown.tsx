/* eslint-disable react/prop-types */
import React from 'react';
import IncompleteTaskActions from './IncompleteTaskActions';
import { Table, TableRow, TableCell, TableBody, TableHead, Box, Collapse } from '@material-ui/core';
import { ITask } from '../../../redux/slices/tasks/types';

const IncompleteTaskDropDown: React.FC<{
    row: ITask;
    open: boolean;
}> = (props): JSX.Element => {
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={props.open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Table size="small" aria-label="more-information">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Hours for BIM</TableCell>
                                    <TableCell>Review Hours</TableCell>
                                    <TableCell>Hours Remaining</TableCell>
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{props.row.hoursRequiredByBim}</TableCell>
                                    <TableCell>{props.row.reviewHours}</TableCell>
                                    <TableCell>{props.row.hoursRemaining}</TableCell>
                                    <TableCell>{props.row.dueDate.toString().slice(0, 10)}</TableCell>
                                    <TableCell>{props.row.notes}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <IncompleteTaskActions taskId={props.row.id} />
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};

export default IncompleteTaskDropDown;
