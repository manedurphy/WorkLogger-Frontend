import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import Copyright from '../Copyright';
import useAuthStyles from '../styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { handleLogin } from '../../../redux/slices/users/usersSlice';
import { useDispatch } from 'react-redux';
import { clearTokens } from '../../../redux/slices/auth/helpers';
import { setRegister } from '../../../redux/slices/auth/authSlice';

const Login = (): JSX.Element => {
    const dispatch = useDispatch();

    const { paper } = useAuthStyles();
    const [formData, setFormData] = useState({ email: '', password: '' });

    useEffect(() => {
        dispatch(setRegister(false));
        clearTokens();
    }, []);

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
                    src={'/work-logger-logo-min.png'}
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
        </Container>
    );
};

export default Login;
