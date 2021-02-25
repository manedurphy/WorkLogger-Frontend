import React from 'react';
import EditButton from '../../buttons/log/Edit';
import DeleteButton from '../../buttons/log/Delete';
import { DropdownProps } from '../types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Dropdown: React.FC<DropdownProps> = ({ logItem, open }): JSX.Element => {
    const showHoursOver = logItem.hoursRemaining < 0;
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
                                    <TableCell>Status</TableCell>
                                    <TableCell>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{logItem.hoursRequiredByBim}</TableCell>
                                    <TableCell>{logItem.reviewHours}</TableCell>
                                    {showHoursOver ? (
                                        <TableCell>{0 - logItem.hoursRemaining}</TableCell>
                                    ) : (
                                        <TableCell>{logItem.hoursRemaining}</TableCell>
                                    )}
                                    <TableCell>{logItem.complete ? 'Complete' : 'In progress'}</TableCell>
                                    <TableCell>{logItem.notes}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-evenly'}>
                        <EditButton logItem={logItem} />
                        <DeleteButton logId={logItem.id} taskId={logItem.TaskId} />
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};

export default Dropdown;
