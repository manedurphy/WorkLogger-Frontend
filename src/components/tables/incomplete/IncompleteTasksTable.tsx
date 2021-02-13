import React from 'react';
import Body from './components/TaskRowBody';
import Head from './components/Head';
import { Table } from '@material-ui/core';

const IncompleteTasksTable = (): JSX.Element => (
    <Table size={'small'}>
        <Head />
        <Body />
    </Table>
);

export default IncompleteTasksTable;
