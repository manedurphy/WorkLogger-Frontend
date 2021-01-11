import React from 'react';
import RegisterForm from '../Register/RegisterForm';
import Register from '../Register/Register';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { postRegisterForm } from '../../../redux/slices/users/helpers';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../../redux/slices/index';
import { addAlert } from '../../../redux/slices/alerts/alertsSlice';
import { handlers } from '../../../mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const store = configureStore({
    reducer: rootReducer,
});

it('should update the alerts in the store', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Register />
        </Provider>,
    );
    store.dispatch(addAlert({ message: 'Test alert', type: 'error' }));

    const alert = getByTestId('alert');
    expect(alert).toBeInTheDocument();
});

it('should respond with a success alert for successful registration', async () => {
    const res = await postRegisterForm({
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@mail.com',
        password: 'password',
        password2: 'password',
    });

    expect(res.message).toEqual('User created!');
    expect(res.type).toEqual('success');
});

it('should properly fire event handlers', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();
    const { getByTestId } = render(
        <Provider store={store}>
            <RegisterForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={{ firstName: '', lastName: '', email: '', password: '', password2: '' }}
            />
        </Provider>,
    );

    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const email = getByTestId('email');
    const password = getByTestId('password');
    const password2 = getByTestId('password2');
    const form = getByTestId('register-form');

    fireEvent.change(firstName, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(lastName, { target: { value: 'User' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(email, { target: { value: 'testuser@email.com' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(password, { target: { value: 'password' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(password2, { target: { value: 'password' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
});
