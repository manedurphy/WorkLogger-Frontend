import React, { ChangeEvent, useState, FormEvent } from 'react';
import RegisterForm from './RegisterForm';
import Copyright from '../Copyright';
import useAuthStyles from '../styles';
import logo from '../../../assets/work-logger-logo-min.png';
import { handleRegister } from '../../../redux/slices/users/usersSlice';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../../../redux/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, Box, Typography, Container } from '@material-ui/core';

const Register = (): JSX.Element => {
    const { paper } = useAuthStyles();
    const dispatch = useDispatch();
    const auth = useSelector(getAuthState);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleRegister(formData));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={paper}>
                <img src={logo} alt={'logo'} width={75} height={50} />
                <Typography component={'h1'} variant={'h5'}>
                    Register
                </Typography>
                <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            {auth.registerSuccess && <Redirect to="/login" />}
        </Container>
    );
};

export default Register;
