import React, { Fragment } from 'react';
import DropDownHead from './DropDownHead';
import DropDownBody from './DropDownBody';
import IncompleteTaskActions from './IncompleteTaskActions';
import { Box, Table } from '@material-ui/core';
import { IRowProps } from '../../../types';

const DropDown: React.FC<IRowProps> = ({ task }) => (
    <Fragment>
        <Box margin={1}>
            <Table size={'small'} aria-label={'more-information'}>
                <DropDownHead />
                <DropDownBody task={task} />
            </Table>
        </Box>
        <IncompleteTaskActions taskId={task.id} />
    </Fragment>
);

export default DropDown;
