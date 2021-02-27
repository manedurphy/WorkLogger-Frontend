import React from 'react';
import Unauthenticated from '../Unauthenticated';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

beforeAll(() => {
    render(
        <Router>
            <Provider store={store}>
                <Unauthenticated />
            </Provider>
        </Router>,
    );
});

/** AUTH FLOW */
describe('Auth flow', () => {
    test('Flow from login to register to login', async () => {
        // Expect login screen to render first
        expect(screen.getByText('Sign In')).toBeInTheDocument();
        expect(screen.queryByText('Register')).not.toBeInTheDocument();

        const registerBtn = screen.getByText("Don't have an account? Sign Up");
        fireEvent.click(registerBtn);

        // Expect transition to register page
        expect(screen.getByText('Register')).toBeInTheDocument();
        expect(screen.queryByText('Sign In')).not.toBeInTheDocument();

        const firstName = screen.getByLabelText('firstName');
        const lastName = screen.getByLabelText('lastName');
        const email = screen.getByLabelText('email');
        const password = screen.getByLabelText('password');
        const password2 = screen.getByLabelText('password2');
        const form = screen.getByTestId('register-form');

        fireEvent.change(firstName, { target: { value: 'Test' } });
        fireEvent.change(lastName, { target: { value: 'User' } });
        fireEvent.change(email, { target: { value: 'testuser@email.com' } });
        fireEvent.change(password, { target: { value: 'password' } });
        fireEvent.change(password2, { target: { value: 'password' } });
        fireEvent.submit(form);

        // Expect successful registration to rediect user to login screen
        expect(await screen.findByText('Sign In')).toBeInTheDocument();
    });
});
