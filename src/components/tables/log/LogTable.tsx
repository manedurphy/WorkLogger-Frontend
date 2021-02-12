import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import { ILog } from '../../../redux/slices/tasks/types';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';
import { Table } from '@material-ui/core';

const LogTable = (): JSX.Element => {
    const { currentTask } = useSelector(getTasksState);
    return (
        <Table size={'small'}>
            <Head />
            {currentTask.Logs.map((logItem: ILog) => (
                <Body key={logItem.id} logItem={logItem} />
            ))}
        </Table>
    );
};

export default LogTable;
