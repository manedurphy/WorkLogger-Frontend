import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { DropdownProps } from '../../types';

const Dropdown: React.FC<DropdownProps> = ({ task, open, Actions }): JSX.Element => {
    const showHoursOver = task.hoursRemaining < 0;
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={open} timeout={'auto'} unmountOnExit>
                    <Box margin={1}>
                        <Table size={'small'} aria-label={'more-information'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Hours for BIM</TableCell>
                                    <TableCell>Review Hours</TableCell>
                                    {showHoursOver ? (
                                        <TableCell>Hours Over</TableCell>
                                    ) : (
                                        <TableCell>Hours Remaining</TableCell>
                                    )}
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{task.hoursRequiredByBim}</TableCell>
                                    <TableCell>{task.reviewHours}</TableCell>
                                    {showHoursOver ? (
                                        <TableCell>{0 - task.hoursRemaining}</TableCell>
                                    ) : (
                                        <TableCell>{task.hoursRemaining}</TableCell>
                                    )}
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
};

export default Dropdown;
