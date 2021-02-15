import React from 'react';
import { DropdownProps } from '../../types';
import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const Dropdown: React.FC<DropdownProps> = ({ task, open, Actions }): JSX.Element => (
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout={'auto'} unmountOnExit>
                <Box margin={1}>
                    <Table size={'small'} aria-label={'more-information'}>
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
                                <TableCell>{task.hoursRequiredByBim}</TableCell>
                                <TableCell>{task.reviewHours}</TableCell>
                                <TableCell>{task.hoursRemaining}</TableCell>
                                <TableCell>{task.dueDate.toString().slice(0, 10)}</TableCell>
                                <TableCell>{task.notes}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Actions task={task} />
            </Collapse>
        </TableCell>
    </TableRow>
);

export default Dropdown;
