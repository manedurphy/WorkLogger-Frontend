import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Head from './Head';
import Body from './Body';
import Title from '../../main/components/Title';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useReportStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getReportState, setShowReport } from '../../../redux/slices/report/reportSlice';

export default function StickyHeadTable(): JSX.Element {
    const dispatch = useDispatch();

    const { root, container } = useReportStyles();
    const { showReport } = useSelector(getReportState);

    return (
        <Fade in={showReport} timeout={500} exit={false}>
            <Paper className={root}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Title>Weekly Report</Title>
                    <IconButton size={'small'} onClick={() => dispatch(setShowReport(false))}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <TableContainer className={container}>
                    <Table stickyHeader aria-label="sticky table">
                        <Head />
                        <Body />
                    </Table>
                </TableContainer>
            </Paper>
        </Fade>
    );
}
