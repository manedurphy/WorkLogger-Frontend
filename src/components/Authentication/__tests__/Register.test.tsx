import React from 'react';
import RegisterForm from '../register/RegisterForm';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { postRegisterForm } from '../../../redux/slices/users/helpers';
import { store } from '../../../redux/store';

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

it('should properly fire event handlers and register a new user on submit', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();
    const { getByLabelText, getByTestId, getByRole } = render(
        <Provider store={store}>
            <RegisterForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={{ firstName: '', lastName: '', email: '', password: '', password2: '' }}
            />
        </Provider>,
    );

    const firstName = getByLabelText('firstName');
    const lastName = getByLabelText('lastName');
    const email = getByLabelText('email');
    const password = getByLabelText('password');
    const password2 = getByLabelText('password2');
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

    const signUpBtn = getByRole('button');
    fireEvent.click(signUpBtn);

    expect(handleSubmit).toHaveBeenCalled();
});
