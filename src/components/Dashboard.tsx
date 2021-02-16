import React, { useEffect } from 'react';
import AppBarComponent from './appbar/AppBarComponent';
import MainComponent from './main/MainComponent';
import DrawerComponent from './drawer/DrawerComponent';
import Modal from './modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../redux/slices/auth/authSlice';
import { handleGetIncompleteTasks } from '../redux/slices/tasks/tasksSlice';

const Dashboard = (): JSX.Element => {
    const dispatch = useDispatch();
    const { loginSuccess } = useSelector(getAuthState);

    useEffect(() => {
        dispatch(handleGetIncompleteTasks());
    }, []);

    return (
        <main>
            <Modal />
            <AppBarComponent />
            <DrawerComponent />
            <MainComponent />
            {!loginSuccess && <Redirect to={'/login'} />}
        </main>
    );
};

export default Dashboard;
