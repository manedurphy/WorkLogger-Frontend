import React, { Fragment } from 'react';
import DropDownHead from './DropDownHead';
import DropDownBody from './DropDownBody';
import IncompleteTaskActions from './IncompleteTaskActions';
import { Box, Table } from '@material-ui/core';
import { IRowProps } from '../../../types';

const DropDown: React.FC<IRowProps> = ({ row }) => (
    <Fragment>
        <Box margin={1}>
            <Table size={'small'} aria-label={'more-information'}>
                <DropDownHead />
                <DropDownBody row={row} />
            </Table>
        </Box>
        <IncompleteTaskActions taskId={row.id} />
    </Fragment>
);

export default DropDown;
