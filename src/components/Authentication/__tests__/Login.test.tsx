import React from 'react';
import Login from '../login/Login';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { IUserState } from '../../../redux/slices/users/types';

// const loginUser: IUserState = {
//     id: 0,
//     firstName: 'Test',
//     lastName: 'User',
//     email: 'testuser@mail.com',
//     loading: false,
// };

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>,
    );
});

it('should successfully log a user in and dispatch their information to the redux store', (done) => {
    const emailInput = screen.getByLabelText('email-address') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('password') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'testuser@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(emailInput).toBeInTheDocument();
    expect(emailInput.value).toBe('testuser@test.com');
    expect(passwordInput.value).toBe('testpassword');

    const submitBtn = screen.getByText('Sign In');
    fireEvent.click(submitBtn);

    setTimeout(() => {
        const state = store.getState();
        const { user } = state;
        expect(user.firstName).toBe('Test');
        expect(user.lastName).toBe('User');
        expect(user.email).toBe('testuser@test.com');
        done();
    }, 500);
});
