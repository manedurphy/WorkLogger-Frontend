import React, { ChangeEvent, FormEvent, useState } from 'react';
import LoginForm from './LoginForm';
import Copyright from '../Copyright';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useAuthStyles from '../styles';
import { IGlobalState } from '../../../redux/types';
import { handleLogin } from '../../../redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Avatar, CssBaseline, Box, Typography, Container } from '@material-ui/core';

const Login = (): JSX.Element => {
    const { paper, avatar } = useAuthStyles();
    const dispatch = useDispatch();
    const { auth } = useSelector((state: IGlobalState) => state);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleLogin(formData));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={paper}>
                <Avatar className={avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {auth.loginSuccess && <Redirect to="/" />}
        </Container>
    );
};

export default Login;
