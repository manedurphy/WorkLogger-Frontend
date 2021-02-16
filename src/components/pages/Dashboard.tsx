import React, { useEffect } from 'react';
import DashboardMainContent from '../main/DashboardMainContent';
import MainContainer from './common/MainContainer';
import { useDispatch } from 'react-redux';
import { handleGetIncompleteTasks } from '../../redux/slices/tasks/tasksSlice';

const Dashboard = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleGetIncompleteTasks());
    }, []);

    return (
        <MainContainer>
            <DashboardMainContent />
        </MainContainer>
    );
};

export default Dashboard;
