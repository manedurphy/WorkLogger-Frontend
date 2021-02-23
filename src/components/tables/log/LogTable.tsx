import React, { Fragment } from 'react';
import useLogTableStyles from './styles';
import Head from './components/Head';
import Body from './components/Body';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import { setShowLog } from '../../../redux/slices/log/logSlice';

const LogTable = (): JSX.Element => {
    const { link } = useLogTableStyles();
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Table size={'small'}>
                <Head />
                <Body />
            </Table>
            <Link className={link} onClick={() => dispatch(setShowLog(false))}>
                See tasks
            </Link>
        </Fragment>
    );
};

export default LogTable;
