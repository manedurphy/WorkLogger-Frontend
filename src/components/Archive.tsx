import React, { useEffect } from 'react';
import AppBarComponent from './appbar/AppBarComponent';
import MainComponent from './main/MainComponent';
import CompleteTasksGridItem from './main/grid/CompleteGridItem';
import DrawerComponent from './drawer/DrawerComponent';
import Modal from './ui/Modal';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../redux/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetIncompleteTasks, handleGetCompleteTasks } from '../redux/slices/tasks/tasksSlice';

const Archive = (): JSX.Element => {
    const dispatch = useDispatch();
    const { loginSuccess } = useSelector(getAuthState);

    useEffect(() => {
        dispatch(handleGetIncompleteTasks());
        dispatch(handleGetCompleteTasks());
    }, []);

    return (
        <main>
            <Modal />
            <AppBarComponent />
            <DrawerComponent />
            <MainComponent />
            <CompleteTasksGridItem />
            {!loginSuccess && <Redirect to={'/login'} />}
        </main>
    );
};

export default Archive;
