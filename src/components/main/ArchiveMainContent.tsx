import React from 'react';
import CompleteTasks from './components/CompleteTasks';
import Log from './components/LogComponent';
import useMainStyles from './mainStyles';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getLogState } from '../../redux/slices/log/logSlice';

const MainComplete = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showLog } = useSelector(getLogState);

    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <CompleteTasks /> : <Log />}
        </Container>
    );
};

export default MainComplete;
