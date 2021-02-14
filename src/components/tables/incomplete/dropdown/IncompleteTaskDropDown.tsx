/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from './components/DropDown';
import { TableRow, TableCell, Collapse } from '@material-ui/core';
import { IRowOpenProps } from '../types';

const IncompleteTaskDropDown: React.FC<IRowOpenProps> = ({ task, open }): JSX.Element => (
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout={'auto'} unmountOnExit>
                <DropDown task={task} />
            </Collapse>
        </TableCell>
    </TableRow>
);

export default IncompleteTaskDropDown;
