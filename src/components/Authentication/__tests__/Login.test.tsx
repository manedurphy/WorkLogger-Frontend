import React from 'react';
import Login from '../login/Login';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { setLogin } from '../../../redux/slices/auth/authSlice';
import { setLoadingUser, setUser } from '../../../redux/slices/users/usersSlice';
import { BrowserRouter as Router } from 'react-router-dom';
import { IUserState } from '../../../redux/slices/users/types';
import { addAlert } from '../../../redux/slices/alerts/alertsSlice';

let sandbox: any;

const loginUser: IUserState = {
    id: 0,
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@mail.com',
    loading: false,
};

beforeEach(() => {
    sandbox = render(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>,
    );
});

it('should set login status to false and loading to false on load', () => {
    store.dispatch(setLogin(false));
    store.dispatch(setLoadingUser(false));

    const { auth, user } = store.getState();
    expect(user.loading).toBeFalsy();
    expect(auth.loginSuccess).toBeFalsy();
    expect(sandbox.getByText('Sign In')).toBeInTheDocument();
});

it('should dispatch user information to the store', () => {
    store.dispatch(setUser({ ...loginUser, loading: false }));
    const { user } = store.getState();

    expect(user.loading).toBeFalsy();
    expect(user.id).toEqual(0);
    expect(user.firstName).toEqual('Test');
    expect(user.lastName).toEqual('User');
    expect(user.email).toEqual('testuser@mail.com');
});

it('should set an alert on screen when dispatched to store', () => {
    store.dispatch(addAlert({ message: 'Login test alert', type: 'error' }));

    const { alerts } = store.getState();
    const alert = sandbox.getByText('Login test alert');

    expect(alerts.length).toEqual(1);
    expect(alert).toBeInTheDocument();
});
