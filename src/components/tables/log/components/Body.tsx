import React from 'react';
import Row from './Row';
import TableBody from '@material-ui/core/TableBody';
import { useSelector } from 'react-redux';
import { getLogState } from '../../../../redux/slices/log/logSlice';

const Body = (): JSX.Element => {
    const { log } = useSelector(getLogState);
    return (
        <TableBody className={'action-cell'}>
            {log.map((logItem) => (
                <Row key={logItem.id} logItem={logItem} />
            ))}
        </TableBody>
    );
};

export default Body;
