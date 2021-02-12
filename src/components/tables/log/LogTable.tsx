import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import { Table } from '@material-ui/core';

const LogTable = (): JSX.Element => (
    <Table size={'small'}>
        <Head />
        <Body />
    </Table>
);

export default LogTable;
