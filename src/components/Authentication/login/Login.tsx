import React, { ChangeEvent, FormEvent, useState } from 'react';
import LoginForm from './LoginForm';
import Copyright from '../Copyright';
import useAuthStyles from '../styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IGlobalState } from '../../../redux/types';
import { handleLogin } from '../../../redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (): JSX.Element => {
    const { paper } = useAuthStyles();
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
        <Container component={'main'} maxWidth={'xs'}>
            <CssBaseline />
            <div className={paper}>
                <img
                    src={'https://work-logger-connor.s3.amazonaws.com/work-logger-logo-min.png'}
                    alt={'logo'}
                    width={75}
                    height={50}
                />
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
