import React, { ChangeEvent, useState, FormEvent } from 'react';
import RegisterForm from './RegisterForm';
import Copyright from '../Copyright';
import useAuthStyles from '../styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { handleRegister } from '../../../redux/slices/users/usersSlice';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../../../redux/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = (): JSX.Element => {
    const dispatch = useDispatch();

    const { paper } = useAuthStyles();
    const { registerSuccess } = useSelector(getAuthState);

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
        <Container component={'main'} maxWidth={'xs'}>
            <CssBaseline />
            <div className={paper}>
                <img
                    src={'https://work-logger-connor.s3.amazonaws.com/work-logger-logo-min.png'}
                    alt={'logo'}
                    width={75}
                    height={50}
                />
                <Typography component={'h1'} variant={'h5'}>
                    Register
                </Typography>
                <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            {registerSuccess && <Redirect to={'/login'} />}
        </Container>
    );
};

export default Register;
