import React, { useEffect } from 'react';
import MainContainer from './common/MainContainer';
import ArchiveMainContent from '../main/ArchiveMainContent';
import { useDispatch } from 'react-redux';
import { handleGetCompleteTasks } from '../../redux/slices/tasks/tasksSlice';

const Archive = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleGetCompleteTasks());
    }, []);

    return (
        <MainContainer>
            <ArchiveMainContent />
        </MainContainer>
    );
};

export default Archive;
